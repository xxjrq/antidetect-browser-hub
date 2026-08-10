# Contributing

Thank you for improving this resource guide.

## Resource format

Every new entry should include:

- Name and official URL.
- One factual sentence describing what it does.
- Category and platform when relevant.
- Open-source/license status when relevant.
- Active, inactive or archived status.
- Last reviewed month for time-sensitive information.

Do not add precise prices unless the source is linked and the date is shown. Do not present a personal opinion as an objective score.

## Content rules

- Write original summaries; do not copy another repository's paragraphs.
- Prefer official documentation and primary sources.
- Do not include credentials, malware, account marketplaces or stolen material.
- Do not add instructions intended to defeat security controls or abuse a service.
- Keep the English category as the source of truth; translations should link back to it.

## Pull requests

Use a focused PR title such as `docs: add browser resource` or `fix: update broken link`. Run the local checker before submitting:

```bash
node scripts/check-markdown.mjs
```

