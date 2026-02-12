# CLAUDE.md

Behavioral rules for Claude Code in the PROJECT_NAME repository.

## Project Overview

PROJECT_DESCRIPTION

Part of the [para-garden ecosystem](https://para-garden.github.io).

## Architecture

<!-- Project-specific architecture notes -->

## Development

```bash
nix develop          # Enter dev shell
bun install          # Install dependencies
bun run dev          # Development with watch
bun run lint         # oxlint
bun run check:types  # TypeScript check
bun test             # Run tests
cd docs && bun dev   # Local docs
```

## Core Rules

- **Note things down immediately:** problems, tech debt, or issues spotted MUST be added to TODO.md backlog
- **Do the work properly.** Don't leave workarounds or hacks undocumented.

## Design Principles

**Tended, not finished.** Nothing ships as a final product. Things grow, change, get reworked.

**Constrained, not limited.** Intentional boundaries create focus.

**Inhabited, not consumed.** Things you spend time in, not things you scroll past.

## Commit Convention

Use conventional commits: `type(scope): message`

Types:
- `feat` - New feature
- `fix` - Bug fix
- `refactor` - Code change that neither fixes a bug nor adds a feature
- `docs` - Documentation only
- `chore` - Maintenance (deps, CI, etc.)
- `test` - Adding or updating tests

## Negative Constraints

Do not:
- Announce actions ("I will now...") - just do them
- Leave work uncommitted
- Use `--no-verify` - fix the issue or fix the hook
- Assume tools are missing - check if `nix develop` is available for the right environment
