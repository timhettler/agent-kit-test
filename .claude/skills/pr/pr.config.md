# pr — repository config

The prose half of [`pr.config.json`](pr.config.json). The skill reads both; Configure writes both;
porting leaves both behind.

## Preflight

- **When a `.ts` file or a `tsconfig*.json` changes:** `pnpm typecheck && pnpm test`, until the
  hooks layer adds a pre-push hook that runs them.

## Commit convention

Conventional Commits `type: subject`, with no scope. Branches are `type/description`. Subject ≤ 72
chars, imperative, lowercase after the colon, no period.

## Git hooks

None yet.

## Doc obligations

## CI

None yet.

## Gotchas

- **Scope every `gh` call to the repository's account:** prefix it with
  `GH_TOKEN=$(gh auth token --user timhettler)`, and never run `gh auth switch`. Run it outside the
  sandbox, where the keychain is readable.
- **Push with the same account's token:**

  ```bash
  git -c credential.helper= -c credential.helper='!f() { echo username=timhettler; echo "password=$(gh auth token --user timhettler)"; }; f' push -u origin <branch>
  ```
