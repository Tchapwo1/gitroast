# 🗄️ Pillar 5: Data Schemas (SCHEMA) — GitRoast

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "GitRoastReport",
  "type": "object",
  "required": ["repo_name", "survival_score", "diagnosis", "roasts", "red_flags"],
  "properties": {
    "repo_name": { "type": "string" },
    "survival_score": { "type": "integer", "minimum": 0, "maximum": 100 },
    "diagnosis": { "type": "string" },
    "roasts": { "type": "array", "items": { "type": "string" } },
    "red_flags": { "type": "array", "items": { "type": "string" } },
    "metrics": {
      "type": "object",
      "properties": {
        "stars": { "type": "integer" },
        "open_issues": { "type": "integer" },
        "forks": { "type": "integer" }
      }
    }
  }
}
```
