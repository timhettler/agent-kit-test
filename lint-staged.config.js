/**
 * No typecheck: tsc checks the whole project, so it can't be scoped to staged files. pre-push runs it.
 *
 * Keep `--no-error-on-unmatched-pattern`: without it, a commit of only files `.oxlintrc.json`
 * ignores makes oxlint exit 1. Don't narrow the glob instead; the ignore list belongs there.
 */
export default {
  '*.{ts,tsx,js,mjs,cjs}': ['prettier --write', 'oxlint --no-error-on-unmatched-pattern'],
  '*.{json,jsonc,json5,md,mdx,css,scss,less,html,vue,yml,yaml,graphql,gql}': 'prettier --write',
}
