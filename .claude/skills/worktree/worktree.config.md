# worktree — repository config

The prose half of [`worktree.config.json`](worktree.config.json). The skill reads both; Configure
writes both; porting leaves both behind.

## Gotchas

- **On an older Node the hooks die with `ERR_UNKNOWN_BUILTIN_MODULE`.** That's the missing
  `activate`, not the hook.
- **Run `pnpm install` outside the sandbox.** Inside it, corepack can't reach the registry.
- **Prettier, oxlint, tsc and vitest skip `.claude/worktrees/`** (probed 2026-10-22): Prettier and
  oxlint through `.gitignore`, tsc through its `include`.
