# pr — repository config

The prose half of [`pr.config.json`](pr.config.json). The skill reads both; Configure writes both;
porting leaves both behind.

## Preflight

## Commit convention

[`CONTRIBUTING.md` § Branch naming](../../../CONTRIBUTING.md#branch-naming) holds the branch and
commit format; [`commitlint.config.js`](../../../commitlint.config.js) checks the message.

## Git hooks

The hooks are in [`.husky/`](../../../.husky/), with
[`lint-staged.config.js`](../../../lint-staged.config.js) and
[`scripts/pre-push.ts`](../../../scripts/pre-push.ts). Only `commit-msg` checks the message; CI
doesn't, so it's advisory. Commit and push with the `activate` prefix and outside the sandbox, which
pnpm and husky need.

## Doc obligations

- **Does it add or change a check?** Add its row to
  [`docs/README.md` § Checked conventions](../../../docs/README.md#checked-conventions).
- **Does it change a GitHub setting the repository expects?** Update
  [`docs/repo-settings.md`](../../../docs/repo-settings.md).

## CI

[`ci.yml`](../../../.github/workflows/ci.yml) runs `verify` on every PR, and
[`labeler.yml`](../../../.github/workflows/labeler.yml) labels it from the branch name. No check is
required until `main` is protected per [`docs/repo-settings.md`](../../../docs/repo-settings.md).
The usual fixes:

- `format:check`: `pnpm format`, then commit.
- `install`: the lockfile drifted; `pnpm install` and commit `pnpm-lock.yaml`.
- `label`: a label the labeler applies is missing; create it with the command in
  `docs/repo-settings.md` § Labels.

## Gotchas

- **Scope every `gh` call to the repository's account:** prefix it with
  `GH_TOKEN=$(gh auth token --user timhettler)`, and never run `gh auth switch`. Run it outside the
  sandbox, where the keychain is readable.
- **Push with the same account's token:**

  ```bash
  git -c credential.helper= -c credential.helper='!f() { echo username=timhettler; echo "password=$(gh auth token --user timhettler)"; }; f' push -u origin <branch>
  ```
