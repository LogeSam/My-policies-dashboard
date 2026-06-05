# My Policies (Vite + React + TypeScript)

This small app renders a user's policies as cards, fetching mock data from `public/policies.json`.

Run locally:

```bash
npm install
npm run dev
```

Open the dev server URL printed by Vite (usually http://localhost:5173).

Notes:
- Policies are filtered to only show `status: "Active"` and sorted ascending by `policyStart`.
- Pagination shows 3 policies per page.
- Tailwind is used for styling; focus-visible outlines are enabled for keyboard users.

