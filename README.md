# hermes-no-comment

This repro showcases that with hermes syntax parser `leadingComments` and `trailingComments` are missing.

## To run

install the deps with `pnpm install`. Or any other package manager, shouldn't make a difference until the problem is solved.

Then run `npm run test` and you'll see the output where the first uses hermes, and the other doesn't defaulting to babel.
