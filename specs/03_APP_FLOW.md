# 🔄 Pillar 3: Application Flow (APP_FLOW) — GitRoast

## Execution Flow
1. **Input Normalization**: Ingests `https://github.com/owner/repo` or raw `owner/repo`.
2. **GitHub Fetch**: Fetches repo details (`/repos/{owner}/{repo}`) and latest commits (`/repos/{owner}/{repo}/commits?per_page=10`).
3. **Forensic Scoring**: Analyzes stars-to-forks ratio, open issues, commit message quality, and update freshness.
4. **Comedic Synthesis**: Selects tailored roasts matching specific flaws (e.g. abandoned repo roast vs. chaos repo roast).
5. **Card Output**: Emits formatted roast card with 1-click Twitter sharing link.
