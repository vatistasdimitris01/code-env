# App & Project Workspace

This repository is organized as a clean workspace for building apps, reusable packages, automation, documentation, and project planning.

## Directory map

| Path | Purpose |
| --- | --- |
| `apps/` | User-facing applications such as web apps, mobile apps, APIs, bots, and dashboards. |
| `packages/` | Shared libraries, UI kits, SDKs, domain modules, and reusable app logic. |
| `tools/` | Developer scripts, generators, deployment helpers, and local automation. |
| `docs/` | Architecture notes, product specs, runbooks, decisions, and operating guides. |
| `templates/` | Starter files and checklists for new apps, packages, and project plans. |
| `.github/` | GitHub issue templates and pull request workflow helpers. |

## How to start a new app

1. Copy `templates/app-template.md` into `apps/<app-name>/README.md`.
2. Fill in the app purpose, stack, setup commands, environment variables, and deployment notes.
3. Add source code under `apps/<app-name>/src/` when implementation begins.
4. Track milestones in `PROJECTS.md`.

## How to start a shared package

1. Copy `templates/package-template.md` into `packages/<package-name>/README.md`.
2. Document the package API, consumers, tests, and release process.
3. Keep package code isolated so it can be reused across apps.

## Working agreement

- Keep each app or package self-contained with its own README.
- Put cross-project decisions and long-lived documentation in `docs/`.
- Prefer small, reviewable changes with clear testing notes.
- Update `PROJECTS.md` whenever a project changes status.
