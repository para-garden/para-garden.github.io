# Scaffolding Templates

Standard files for new projects in the para-garden ecosystem.

## Usage

Copy files to your new repo and replace placeholders:

```bash
# Copy all scaffolding files
cp -r scaffolding/. ~/git/paragarden/new-project/

# Replace placeholders
sed -i 's/PROJECT_NAME/your-project/g' ~/git/paragarden/new-project/flake.nix ~/git/paragarden/new-project/docs/package.json ~/git/paragarden/new-project/CLAUDE.md
sed -i 's/PROJECT_DESCRIPTION/Your description/g' ~/git/paragarden/new-project/flake.nix ~/git/paragarden/new-project/CLAUDE.md
```

## Files Included

| File | Purpose |
|------|---------|
| `.envrc` | direnv + nix-direnv integration |
| `.gitignore` | Standard ignores for Bun + Nix |
| `.githooks/pre-commit` | oxlint + tsgo type check |
| `.githooks/commit-msg` | Conventional commits validation |
| `.github/workflows/ci.yml` | CI: lint, type check, test |
| `.github/workflows/deploy-docs.yml` | VitePress docs to GitHub Pages |
| `flake.nix` | Nix dev shell with Bun |
| `docs/package.json` | VitePress config |
| `CLAUDE.md` | Template behavioral rules |

## Placeholders

- `PROJECT_NAME` - lowercase project name (e.g., `existence`)
- `PROJECT_DESCRIPTION` - short description

## Additional Setup

After copying, you'll also need:

1. `package.json` - project dependencies (or none for vanilla JS)
2. `src/` - your source code
3. `docs/.vitepress/config.ts` - VitePress config
4. `docs/index.md` - docs home page
