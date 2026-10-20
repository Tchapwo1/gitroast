# 📋 Pillar 1: Product Requirements Document (PRD) — GitRoast

## 1. Executive Summary & Value Proposition
**GitRoast** is an open-source viral CLI and developer entertainment tool that forensically audits any public GitHub repository (`user/repo` or full URL) and delivers a **savage, hilarious, and technically accurate roast** of its code hygiene, commit habits, dependency bloat, and security omissions.

It computes an interactive **0–100 Survival Score**, exposes embarrassing repo red flags (e.g. *"commit messages that read like cries for help"*, *"142 open issues aging like milk"*), and generates a 1-click shareable Twitter/X roast snippet.

---

## 2. Target Persona & Viral Market Positioning
- **Target Persona**: Software engineers, open-source maintainers, indie hackers, tech Twitter shitposters, and developer communities on Reddit (`r/programming`, `r/ProgrammerHumor`).
- **Core Emotional Trigger**: Developer ego, schadenfreude, and technical self-awareness. Developers love roasting their friends' code, celebrity repos, and their own past projects.
- **Viral Hook**: *"Paste any GitHub repo and get roasted in 3 seconds. npx gitroast <user/repo>"*.

---

## 3. Core Scope & Forensic Roast Vectors
1. **Commit Message Archaeology**: Detects unhelpful commit messages (*"fix"*, *"wip"*, *"asdf"*, *"finally works"*, *"kill me"*).
2. **Issue Debt vs. Abandonment**: Measures open issue ratio and stale issue half-life.
3. **Dependency Heaviness**: Audits `package.json` / lockfiles for dependency bloat (*"importing a 50MB library to center a div"*).
4. **License & Security Hygiene**: Flags missing `LICENSE`, missing `.gitignore`, or exposed `.env.example` secrets.
5. **Bus Factor & Solo Heroics**: Checks if 99% of commits are from one sleep-deprived author.
6. **The 0–100 Survival Score**: Dynamic grading from "Production-Grade Fortress" (90+) down to "Code Dumpster Fire" (<40).

---

## 4. Guardrails & Non-Goals
- **Constructive Comedy**: The humor is sharp and satirical, but always grounded in real observable technical metrics.
- **Zero Credentials Required**: Operates using public unauthenticated GitHub API endpoints.
