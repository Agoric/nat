/* eslint-disable-next-line import/no-unresolved */
import replace from 'rollup-plugin-replace';
import path from 'path';

export default [
  {
    input: '../test/test.js',
    output: {
      file: 'transform-tests/output/test.no-nat.cjs.js',
      format: 'cjs',
    },
    external: [path.resolve(__dirname, '../src/index.js'), 'tape'],
    plugins: [
      replace({
        delimiters: ['', ''],
        "import Nat from '../src/index';": '',
      }),
    ],
  },
];
