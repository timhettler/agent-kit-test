# agent-kit-test

Guidance for coding agents; `CLAUDE.md` is a symlink to this file.
[`docs/README.md`](docs/README.md) indexes everything else.

## Commands

Each shell call starts fresh, so prefix every project command with the pinned Node:
`source ~/.nvm/nvm.sh && nvm use && `. Under an older Node, pnpm fails with
`ERR_UNKNOWN_BUILTIN_MODULE`.

- `pnpm typecheck` is the only check of a script's types, since running one strips them.
- `pnpm lint`, then `pnpm check:markdown`, which fails on a table row GitHub would print as text.
- `pnpm format` writes, and `pnpm format:check` reports. The pre-commit hook formats staged files,
  so you rarely need either.
- `pnpm test`

## Workflow

**Plan first.** Plan anything with three or more steps or an architectural decision with the
`tech-plan` skill, as an issue on the repository's Project. If the work goes sideways, stop and
re-plan.

**Verify.** Never call a task done without proving it works: run the build, typecheck, lint and test
scripts as the last step, and run the thing you changed. A push of a clean `HEAD` runs them through
the pre-push hook, which counts. Before adding a check, read
[`docs/README.md` § Checked conventions](docs/README.md#checked-conventions).

**Learn.** When a correction reveals a mistake that could recur, prevent it with a check, or fix the
doc that owns the topic. Only when neither can hold it, add a lesson under the bar in
[`docs/lessons/README.md`](docs/lessons/README.md). Before a task, read the lessons file for that
kind of work.

**Keep docs true.** A PR that makes a doc false fixes it: grep the vocabulary of the fact you
changed. Point at where a fact lives rather than copying it, and write what's true now, not what
changed.

## Branching

Branches and commits follow [`CONTRIBUTING.md` § Branch naming](CONTRIBUTING.md#branch-naming).
Never commit to `main`.

## Principles

- **Simplicity first.** Make the smallest change that works, and touch only what it needs. Surface
  adjacent cleanups as follow-ups rather than folding them in.
- **Find the root cause.** No temporary fixes.
- **Surface failures.** When an error signals a data or config problem, make it visible and fix it
  in the layer that owns it. Never swallow it, retry blindly, or special-case the symptom.
- **Verify, don't assume.** Check the code before stating a fact, especially one inherited from a
  plan, doc or earlier session, and say what you checked.
- **Break things on purpose.** Nothing here has a supported consumer yet, so a breaking change that
  improves the result is encouraged. Keeping a provisional decision for compatibility is how it gets
  canonized. Change the call sites and tell whoever is affected, rather than shipping a shim, an
  alias or a deprecation window. That ceremony earns its keep once a supported consumer exists.

## Writing

For anything a teammate or an agent reads: docs, comments, commits, PRs and issues. Replies to the
person you're working with are out of scope.

**Voice.** Write like a senior colleague on Slack: plain, direct, complete sentences. Cut filler,
not grammar.

**Shape.**

- Lead with the answer or the change. No preamble, no recap.
- One reason per decision. Link the doc that holds the rest.
- No headers or bullets for anything under about five sentences, except in the PR shape below.
- Leave out what you didn't do, what you checked and found fine, and caveats that wouldn't change
  the reader's next action.
- Don't report checks that run automatically (lint, format, typecheck, commit hooks, CI). Report
  what you checked by hand, and anything failing.

**Budgets.**

| Artifact     | Limit                                                              |
| ------------ | ------------------------------------------------------------------ |
| PR           | About 8 lines, in the shape below                                  |
| Commit body  | 3 lines                                                            |
| Code comment | 1 line, only for what the code can't say                           |
| Issue        | The problem, what "done" means, one link; `tech-plan` shapes plans |

A PR opens with the change in one or two sentences, without a header. **Verification** follows: the
issue link first, then the acceptance criteria met or left open, then checks run by hand. **Reviewer
notes** come last: what to judge, or do after merge. Omit any section or bullet with nothing to say.

**Comments.** [`docs/guidelines/code-comments.md`](docs/guidelines/code-comments.md) is the
authority. In short: a comment earns its place only with what a senior engineer can't get from the
code, types, names or tests nearby, and a comment a tool reads is part of the program.

**Stay true.** If an unrelated merge would make a sentence false, point at where the fact lives or
cut the sentence.

- **History.** Describe the current state, not how it got there. Commits state the change, not the
  backstory.
- **Numbers.** In docs, never state a count the repo can answer. In PRs and issues, keep a number
  only if it changes the reader's decision.

**Before you finish.**

1. Scan for _now, no longer, previously, used to, instead of, replaced_ and check each one. Rewrite
   any that narrate a change as the current fact.
2. Scan for numbers. Keep only those that change a decision.
3. Check the budget. If you're over, cut whole sentences.

**Example.**

> Adds husky's pre-commit, commit-msg and pre-push hooks. A non-conventional message was rejected,
> and pre-push ran the full check set on the push.
