# 🔥 GitRoast

> **Savage forensic code, commit, and hygiene roaster for any public GitHub repository.**  
> Turn your git repository into hilarious, unhinged, viral terminal roasts with one command.

```text
  ██████╗ ██╗████████╗██████╗  ██████╗  █████╗ ███████╗████████╗
 ██╔════╝ ██║╚══██╔══╝██╔══██╗██╔═══██╗██╔══██╗██╔════╝╚══██╔══╝
 ██║  ███╗██║   ██║   ██████╔╝██║   ██║███████║███████╗   ██║   
 ██║   ██║██║   ██║   ██╔══██╗██║   ██║██╔══██║╚════██║   ██║   
 ╚██████╔╝██║   ██║   ██║  ██║╚██████╔╝██║  ██║███████║   ██║   
  ╚═════╝ ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   
```

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-blue.svg)](https://nodejs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Tchapwo1/gitroast)

---

## ⚡ Quick Start

No installation required. Run directly with `npx`:

```bash
npx gitroast <owner/repo>
```

### Examples

```bash
# Roast yourself or your friends
npx gitroast torvalds/linux
npx gitroast facebook/react
npx gitroast vercel/next.js
npx gitroast Tchapwo1/repospy
```

Or install globally:

```bash
npm install -g gitroast
gitroast octocat/Hello-World
```

---

## 🎭 What GitRoast Analyzes

GitRoast connects to the GitHub API, analyzes forensic hygiene metrics, and computes a **Survival Score (0-100)**:

1. ⚠️ **Stale Issues:** Checks if your issue tracker is a cemetery of unanswered bugs.
2. 💤 **Zombie Pull Requests:** Identifies PRs waiting for review since the Bronze Age.
3. 📉 **Star Poverty:** Evaluates repository popularity without mercy.
4. 📝 **Criminal Commit Messages:** Exposes commits like `"fix"`, `"asdf"`, `"pls work"`, or `"final final v2"`.
5. 📜 **Licensing Hygiene:** Flags repo owners living dangerously without a license.
6. 🕸️ **Repository Neglect:** Tracks time since the last commit.
7. 🏷️ **Fork Abandonment:** Roasts zero-maintenance forks.

---

## 📸 Sample Output

```text
┌────────────────────────────────────────────────────────────┐
│                       🔥 GITROAST 🔥                       │
│                                                            │
│ Target:  facebook/react                                    │
│ Survival Score:  82/100 (SURVIVABLE WITH TRAUMA)           │
│ Stars:  234,512 ⭐ | Open Issues:  1,420 ⚠️                │
│                                                            │
│ 1. ⚠️  Your issues tab has 1,420 tickets aging like fine    │
│       milk in a hot server room.                           │
│ 2. 🔀 312 stale pull requests. Contributors are waiting for│
│       approval in retirement homes.                        │
│ 3. 💥 Recent commit: "update test". Shakespeare could      │
│       never capture that depth of human suffering.         │
│                                                            │
│ 🐦 Tweet your shame:                                       │
│ https://twitter.com/intent/tweet?text=I%20just%20got...    │
└────────────────────────────────────────────────────────────┘
```

---

## ⚙️ Options & Environment

```bash
gitroast [options] <repo>

Options:
  -v, --version         output the current version
  -t, --token <token>   GitHub Personal Access Token (to avoid API rate limits)
  -h, --help            display help for command
```

To prevent GitHub's 60 req/hr rate limit when roasting dozens of repos:
```bash
export GITHUB_TOKEN=ghp_yourpersonalaccesstoken
npx gitroast owner/repo
```

---

## 🤝 Contributing

Got a savage roast punchline or new forensic metrics? Pull requests are warmly welcomed!
1. Fork the repo
2. Add your savage punchline in `src/jokes.js`
3. Submit a PR

---

## 📄 License

MIT © [Tchapwo1](https://github.com/Tchapwo1)
