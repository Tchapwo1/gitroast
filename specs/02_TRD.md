# 🛠️ Pillar 2: Technical Requirements Document (TRD) — GitRoast

## 1. System Architecture & Tech Stack

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           GITROAST RUNTIME ARCHITECTURE                     │
│                                                                             │
│  CLI Command: npx gitroast <user/repo | url>                                │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                     GITHUB API RESOLVER & INGESTOR                    │  │
│  │   • Resolves GitHub slugs (e.g. facebook/react, Tchapwo1/repospy)    │  │
│  │   • Fetches repository metadata, recent commits, & languages          │  │
│  └──────────────────────────────────┬────────────────────────────────────┘  │
│                                     │                                       │
│             ┌───────────────────────┼───────────────────────┐               │
│             ▼                       ▼                       ▼               │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐  │
│  │ Commit Archeology   │  │ Issue & Stale Debt  │  │ Hygiene & Bloat     │  │
│  │ Analyzer            │  │ Calculator          │  │ Detector            │  │
│  └──────────┬──────────┘  └──────────┬──────────┘  └──────────┬──────────┘  │
│             │                        │                        │             │
│             └────────────────────────┼────────────────────────┘             │
│                                      ▼                                      │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                       COMEDIC ROAST SYNTHESIZER                       │  │
│  │   • Computes 0-100 Survival Score                                     │  │
│  │   • Picks 3 contextually tailored roasts from punchline bank          │  │
│  │   • Renders terminal box with 1-click Twitter/X intent URL            │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Dependencies & Runtime
- **Runtime:** Node.js $\ge 18.0.0$ (ESM).
- **Dependencies:**
  - `chalk`: High-contrast comedy colors (Fire Orange `#F97316`, Toxic Yellow `#EAB308`, Critical Red `#EF4444`).
  - `boxen`: Terminal frame and card borders.
  - `ora`: Dramatic animated roasting spinners.
  - `commander`: CLI interface.

---

## 3. File Tree Contract
```
gitroast/
├── bin/
│   └── gitroast.js            # Executable CLI entrypoint
├── src/
│   ├── roaster.js             # Core analysis & scoring logic
│   ├── jokes.js               # Categorized punchline dictionary
│   └── ui.js                  # Boxen terminal card renderer
├── specs/                     # 6-Pillar Spec Blueprint
├── package.json
├── README.md
└── LICENSE
```
