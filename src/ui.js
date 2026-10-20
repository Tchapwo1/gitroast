import chalk from 'chalk';
import boxen from 'boxen';

export function renderRoast(report) {
  const { repo_name, stars, open_issues, survival_score, diagnosis, roasts, red_flags, language } = report;

  const scoreColor =
    survival_score >= 80
      ? chalk.hex('#22C55E')
      : survival_score >= 50
      ? chalk.hex('#EAB308')
      : chalk.hex('#EF4444');

  const tweetText = encodeURIComponent(
    `🔥 My repo ${repo_name} just scored ${survival_score}/100 on GitRoast ("${diagnosis}").\n\n"${roasts[0]}"\n\nGet roasted: https://github.com/Tchapwo1/gitroast`
  );
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

  const roastList = roasts.map((r, i) => `${chalk.bold.yellow(`${i + 1}.`)} ${chalk.white(r)}`).join('\n\n');
  const flagsList = red_flags.map((f) => `  ${chalk.hex('#EF4444')('🚩')} ${chalk.dim(f)}`).join('\n');

  const content = `
${chalk.bold.hex('#F97316')('🔥 GITROAST FORENSIC CODE REPORT')}
${chalk.gray('Repository:')} ${chalk.bold.white(repo_name)}  ${chalk.dim(`[${language} | ⭐ ${stars.toLocaleString()} | ⚠️ ${open_issues.toLocaleString()} issues]`)}

${chalk.bold('SURVIVAL SCORE: ')} ${scoreColor.bold(`${survival_score} / 100`)}  ${chalk.dim(`[DIAGNOSIS: ${diagnosis}]`)}

${chalk.bold.hex('#F97316')('🎙️ THE FORENSIC ROAST:')}
${roastList}

${chalk.bold.hex('#EF4444')('🚩 FORENSIC RED FLAGS:')}
${flagsList}

${chalk.dim('─'.repeat(70))}
${chalk.bold.hex('#38BDF8')('🐦 SHARE YOUR ROAST ON X/TWITTER:')}
${chalk.underline.cyan(tweetUrl)}
`;

  console.log(
    boxen(content.trim(), {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: survival_score >= 70 ? '#EAB308' : '#F97316',
      backgroundColor: '#090A0F',
    })
  );
}
