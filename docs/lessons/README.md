# Lessons

Mistakes that recur, one file per kind of work, such as `git-and-prs.md` or `dev-environment.md`.
Read the file for the work you're about to do. When unsure, `grep -rl '<symptom>' docs/lessons/`.

**A lesson is the last resort.** First make the mistake impossible or loud: a lint rule, a script, a
hook or a test. Failing that, fix the doc that owns the topic, such as `AGENTS.md`, a skill, a
guideline or a module's own docs, since those are read where the work happens. Write a lesson only
when neither can hold it.

**The bar for an entry.** Add one only if every line holds:

1. **Someone already got it wrong**, or predictably would.
2. **A minute in the code or its history wouldn't tell you.** No type, comment, test name, commit or
   PR already records it.
3. **It will still be true next quarter.** Anything that expires sooner is a plan item or a code
   comment.
4. **It's cross-cutting.** No one module, tool or doc owns it.

**Anatomy.** A bulleted entry opens with its claim in bold, then gives the mechanism, the symptom it
shows, and what to do instead. Name the misleading signal that makes the wrong diagnosis look right,
and the tempting wrong fix.

**When an entry goes stale,** because a dependency was upgraded or a command fixed, edit or delete
it. A wrong lesson is worse than a missing one, because it gets trusted.

A new file opens with `# <Kind of work>`, one sentence on its scope, and a link back to this bar.
