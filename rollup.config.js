let commonjs = require('@rollup/plugin-commonjs');
let terser = require('@rollup/plugin-terser');

module.exports = {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'esm'
  },
  plugins: [commonjs(), terser()]
};
