# tech-plan — repository config

The prose half of [`tech-plan.config.json`](tech-plan.config.json). The skill reads both; Configure
writes both; porting leaves both behind.

## Default steps

Every plan here ends with these, copied verbatim in place of `{{DefaultSteps}}`:

- [ ] CI green on every PR

## Gotchas

- **Scope every `gh` call to the repository's account:** prefix it with
  `GH_TOKEN=$(gh auth token --user timhettler)`, never `gh auth switch`, and run it outside the
  sandbox, where the keychain is readable.
