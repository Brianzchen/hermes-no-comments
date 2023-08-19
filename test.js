const { parseSync } = require('@babel/core');

const test = (withHermes) => {
  const parsed = parseSync(`
/**
 * I am a comment
 */
const Box = () => {

};
/**
 * I am a trailing comment
 */

export default Box;
`, {
  plugins: withHermes
    ? [
      'babel-plugin-syntax-hermes-parser',
    ]
    : [],
  });

  console.log(`This is the body with hermes parser: ${withHermes ? 'on' : 'off'}`);
  console.log('----');
  console.log(parsed.program.body[0]);
};

test(true);
test(false);


