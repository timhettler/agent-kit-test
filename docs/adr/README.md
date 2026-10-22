# Architecture decision records

One numbered file per decision: what was decided, when, and why. If a decision governs the code, it
belongs here, where the next person to contradict it will find it. Start a new one from
[`template.md`](template.md), numbered after the highest here.

- **A decision is frozen.** Reversing or replacing one takes a new ADR with `Supersedes:`, never an
  edit.
- **An addition is amended in place, and logged.** Widening a list, or clarifying without
  contradicting, is edited into its section, since docs cite ADRs by section. Log it under
  `## Amendments` with one dated line. If the amendment can't be written without describing a
  reversal, it's a new ADR.
- **An ADR holds no live state.** Its context describes the world on the decision date and is never
  updated. Plans link to ADRs, never the reverse.

| ADR | Decision | Status |
| --- | -------- | ------ |
