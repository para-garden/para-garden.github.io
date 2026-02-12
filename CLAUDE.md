# CLAUDE.md

Behavioral rules for Claude Code in the para ecosystem docs repository.

## Ecosystem

This is the organization-level documentation site for the para-garden ecosystem.

para-garden tends worlds — concrete games, experiences, and creative works. Where rhi is infrastructure and exo is places/platforms, para is the things people actually encounter and inhabit.

### Projects

| Project | Path | Description |
|---------|------|-------------|
| **existence** | `~/git/paragarden/existence` | Text-based HTML5 game — power anti-fantasy with constrained agency |

### Org Resources

| Resource | Path | Description |
|----------|------|-------------|
| **.github** | `~/git/paragarden/profile` | Org-wide GitHub config, templates |
| **Docs site** | `~/git/paragarden/github-io` | This repo - org documentation |

## Responsibilities

### Keeping Docs in Sync

When projects change:
- Update project pages in `docs/projects/`
- Update the project table in `docs/about.md`
- Update `README.md` project table
- Update sidebar/nav in `.vitepress/config.ts`
- Update hero page features in `docs/index.md`

### Scaffolding New Repos

Template files are in `scaffolding/` directory. Copy and replace placeholders:

```bash
cp -r scaffolding/. ~/git/paragarden/new-project/
sed -i 's/PROJECT_NAME/new-project/g' ~/git/paragarden/new-project/flake.nix ~/git/paragarden/new-project/docs/package.json ~/git/paragarden/new-project/CLAUDE.md
sed -i 's/PROJECT_DESCRIPTION/Description here/g' ~/git/paragarden/new-project/flake.nix ~/git/paragarden/new-project/CLAUDE.md
```

**Included templates:**
- `.envrc` - nix-direnv integration
- `.gitignore` - Bun + Nix ignores
- `.githooks/pre-commit` - oxlint + tsgo
- `.githooks/commit-msg` - conventional commits validation
- `.github/workflows/ci.yml` - CI pipeline
- `.github/workflows/deploy-docs.yml` - VitePress deployment
- `flake.nix` - Nix dev shell
- `docs/package.json` - VitePress config
- `CLAUDE.md` - standard behavioral rules

**Still need manually:**
- `package.json` + `src/` (or equivalent for vanilla JS projects)
- `docs/.vitepress/config.ts` + `docs/index.md`

### Docs Site Conventions

**Project docs should link back to the main ecosystem site:**

When a project has its own docs site, include a navbar link back to the main para docs. In VitePress config:

```ts
nav: [
  // ... other nav items
  { text: 'para', link: 'https://para-garden.github.io/' },
]
```

## Core Rules

**Note things down immediately:**
- Ecosystem changes → this file or relevant project's docs
- Cross-project issues → TODO.md in affected repos
- Documentation updates → do them, don't defer

**Do the work properly.** When updating ecosystem docs, actually check the source repos for accuracy.

## Negative Constraints

Do not:
- Announce actions ("I will now...") - just do them
- Leave work uncommitted
- Make ecosystem changes without checking all affected repos
- Update docs without verifying against source
- Use `--no-verify` - fix the issue or fix the hook
- Assume tools are missing - check if `nix develop` is available for the right environment
