# Copilot instructions for this repository

This file helps future Copilot sessions understand how to build, test, lint, and navigate this Create React App repository.

## Build, test and lint commands
- Install dependencies: `npm install`
- Start development server: `npm start` (react-scripts start)
- Build production bundle: `npm run build` (output -> `build/`)
- Run tests (interactive watch mode): `npm test`
- Run tests once / CI mode (no watch): `npm test -- --watchAll=false`

Running a single test:
- Run a single test file by path: `npm test -- src/App.test.js`
- Run tests that match a name/pattern: `npm test -- -t "pattern"` (example: `npm test -- -t "renders"`)

Linting:
- ESLint is configured via `eslintConfig` (extends `react-app`). There is no `npm run lint` script by default.
- To run ESLint manually: `npx eslint src --ext .js,.jsx` (install `eslint` and any plugins if you add custom rules)

## High-level architecture
- Bootstrapped with Create React App (react-scripts).
- Single-page React app. Key folders:
  - `src/` — application source. Entry point: `src/index.js` which mounts `<App />` from `src/App.js`.
  - `public/` — static assets and `index.html`.
  - `build/` — production output after `npm run build`.
- Testing: Jest + React Testing Library (`@testing-library/*`). `src/setupTests.js` sets up test helpers.
- Styling: plain CSS files (`src/App.css`, `src/index.css`). No CSS modules or TypeScript present.
- Web vitals: `src/reportWebVitals.js` included for optional analytics.

## Key conventions (repo-specific)
- Tests are colocated with implementation using `*.test.js` naming (e.g., `src/App.test.js`). Use `-t` or path to run a single test.
- Rely on `react-scripts` for build/test/lint integration; avoid ejecting unless necessary. If you do eject, update these instructions.
- ESLint config uses `react-app` presets; add a `lint` script if you add custom rules or want CI lint steps.
- Static assets (images, manifest) live in `public/`. Use imports from `src` for bundler-managed assets, or reference `/`-rooted paths for public assets.
- Testing utilities are set up in `src/setupTests.js`. Use React Testing Library best practices in new tests.

## Files checked when preparing this file
- `package.json` — scripts: `start`, `build`, `test`, `eject`.
- `README.md` — standard CRA instructions.
- `src/` — `index.js`, `App.js`, `App.test.js`, `setupTests.js`, `reportWebVitals.js`, CSS files.

---

If helpful, configure an MCP server for Playwright (web UI testing) or similar. Would you like me to add a Playwright MCP server config for this project?

Summary: created `.github/copilot-instructions.md` describing build/test/lint commands, high-level architecture, and repository-specific conventions. Let me know any adjustments or extra areas to cover.
