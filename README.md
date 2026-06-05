# My Policies Dashboard

A small React + TypeScript app built with Vite that displays a user's policies as responsive cards.

## What this project does
- Fetches mocked policy data from `public/policies.json`
- Filters the data to show only policies with `status: "Active"`
- Sorts active policies in ascending order by `policyStart`
- Paginates the policy cards with a maximum of 3 policies per page
- Renders different policy details depending on whether type is `Single Trip` or `Annual`
- Uses context for state and data management instead of prop drilling
- Uses Tailwind CSS for styling and accessible keyboard focus outlines

## Tech stack
- Vite for fast development and build tooling
- React for UI rendering
- TypeScript for typed components and data models
- Tailwind CSS for utility-first styling
- `public/policies.json` as a mocked API response

## Project structure
- `src/App.tsx` — main app shell
- `src/context/PolicyContext.tsx` — fetches policy data and exposes filtered/sorted/paginated state
- `src/components/PolicyCard.tsx` — renders a single policy card
- `src/components/PolicyList.tsx` — renders the current page of policies
- `src/components/Pagination.tsx` — page controls
- `src/types/policy.ts` — TypeScript definitions for policy data

## Run locally
```bash
cd "d:/Infosys Interview/MyPolicies"
npm install
npm run dev
```

Then open the Vite URL printed in the terminal (usually `http://localhost:5173`).

## Notes
- Links use dummy `#` hrefs and buttons have placeholder click handlers.
- Focus-visible outlines are intentionally supported for keyboard accessibility.
- The app is intentionally simple and designed to match the requested policy card layout and pagination behavior.

