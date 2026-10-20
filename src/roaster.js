import { PUNCHLINES } from './jokes.js';

export async function roastRepo(repoInput) {
  let slug = repoInput.trim();
  slug = slug.replace(/^https?:\/\/github\.com\//i, '').replace(/\/$/, '');

  const parts = slug.split('/');
  if (parts.length < 2) {
    throw new Error(`Invalid GitHub repository format. Expected "owner/repo" or "https://github.com/owner/repo". Received: "${repoInput}"`);
  }

  const [owner, repo] = parts;
  const repoUrl = `https://api.github.com/repos/${owner}/${repo}`;

  const res = await fetch(repoUrl, {
    headers: {
      'User-Agent': 'GitRoast-CLI/1.0',
      Accept: 'application/vnd.github.v3+json',
    },
  });

  if (!res.ok) {
    if (res.status === 404) {
      throw new Error(`Repository "${owner}/${repo}" not found or is private.`);
    }
    if (res.status === 403) {
      throw new Error('GitHub API rate limit exceeded. Please wait a minute or set a GITHUB_TOKEN.');
    }
    throw new Error(`GitHub API returned HTTP ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();

  // Fetch recent commits for commit message archaeology
  let commits = [];
  try {
    const commitsRes = await fetch(`${repoUrl}/commits?per_page=5`, {
      headers: { 'User-Agent': 'GitRoast-CLI/1.0' },
    });
    if (commitsRes.ok) commits = await commitsRes.json();
  } catch (e) {}

  // 1. Compute 0-100 Survival Score
  let score = 75;
  const roasts = [];
  const redFlags = [];

  // Issue audit
  const issues = data.open_issues_count || 0;
  if (issues > 500) {
    score -= 25;
    roasts.push(PUNCHLINES.high_issues[0](issues));
    redFlags.push(`Massive Issue Backlog: ${issues} unresolved tickets`);
  } else if (issues > 100) {
    score -= 15;
    roasts.push(PUNCHLINES.high_issues[1](issues));
    redFlags.push(`Heavy Issue Debt: ${issues} open tickets`);
  }

  // Star audit
  const stars = data.stargazers_count || 0;
  if (stars === 0) {
    score -= 15;
    roasts.push(PUNCHLINES.zero_stars[0]());
    redFlags.push('Zero Social Proof: 0 GitHub stars');
  } else if (stars > 10000) {
    score += 15;
    roasts.push(PUNCHLINES.massive_stars[0](stars));
  }

  // Commit archaeology
  if (commits.length > 0) {
    const lastMsg = commits[0].commit.message.split('\n')[0];
    const isLazy =
      lastMsg.length < 10 ||
      ['fix', 'update', 'wip', 'test', 'done', 'asdf'].some((w) => lastMsg.toLowerCase().includes(w));
    if (isLazy) {
      score -= 10;
      roasts.push(PUNCHLINES.lazy_commits[0](lastMsg));
      redFlags.push(`Lazy Commit Habits: "${lastMsg}"`);
    }
  }

  // License check
  if (!data.license) {
    score -= 15;
    roasts.push(PUNCHLINES.no_license[0]());
    redFlags.push('Missing LICENSE: Default copyright risk');
  }

  // General filler burn if needed
  while (roasts.length < 3) {
    const randomBurn = PUNCHLINES.general_burns[Math.floor(Math.random() * PUNCHLINES.general_burns.length)];
    const text = randomBurn();
    if (!roasts.includes(text)) roasts.push(text);
  }

  const finalScore = Math.min(100, Math.max(12, score));
  let diagnosis = 'PRODUCTION FORTRESS';
  if (finalScore < 40) diagnosis = 'CODE DUMPSTER FIRE';
  else if (finalScore < 60) diagnosis = 'ORGANIZED CHAOS';
  else if (finalScore < 80) diagnosis = 'SURVIVING ON OPTIMISM';

  return {
    repo_name: `${owner}/${repo}`,
    stars,
    open_issues: issues,
    forks: data.forks_count || 0,
    language: data.language || 'Mystery Code',
    survival_score: finalScore,
    diagnosis,
    roasts: roasts.slice(0, 3),
    red_flags: redFlags.length > 0 ? redFlags : ['Surprisingly clean... or hiding something.'],
  };
}
