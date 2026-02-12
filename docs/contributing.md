# Contributing

Guidelines for contributing to para-garden projects.

## Development Setup

Projects vary in their tech stacks — check each project's README for specifics.

For projects with Nix support:

```bash
nix develop
# or with direnv: direnv allow
```

## Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## Code Style

Varies by project. Some use Bun/TypeScript, others use vanilla JS with no build step. Check the project's README and contributing guide.

## Pull Requests

1. Fork the repository
2. Create a feature branch from `master`
3. Make your changes with conventional commits
4. Ensure any project-specific checks pass
5. Open a PR with a clear description

## Documentation

Each project has a `docs/` directory with VitePress:

```bash
cd docs
bun install
bun run dev
```

## Questions?

Open an issue in the relevant repository.
