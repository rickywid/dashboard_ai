# Daybook

A responsive React personal dashboard based on `FEATURES.md`.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Run `npm run build` to create the production bundle, and `npm run preview` to preview it.

## Foundation

`src/App.jsx` owns the shared navigation and layout. Each feature has its own component under `src/components/`: `News.jsx`, `Sports.jsx`, `Jobs.jsx`, `Goals.jsx`, `Tasks.jsx`, and `Calendar.jsx`. Shared card and empty-state components live in `Section.jsx`; shared styles live in `src/styles.css`.

The calendar displays the current month, highlights today, and supports previous/next month navigation. News, sports, jobs, goals, and tasks are explicitly labeled placeholders for future implementation. No live feeds or saved goal/task management are connected yet.

## Feature worktrees

Once the foundation is committed on `main`, run `git merge main` inside each existing feature worktree before implementing its feature. Keep feature code in its corresponding component where possible.
