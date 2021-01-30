/* eslint-disable-next-line import/no-unresolved */
import replace from '@rollup/plugin-replace';

export default [
  {
    input: 'test-nat-tape.js',
    output: {
      file: 'transform-tests/output/test.cjs.js',
      format: 'cjs',
    },
    external: ['@agoric/nat', 'tape'],
    plugins: [
      replace({
        delimiters: ['', ''],
        "import { isNat, Nat } from '../src/index';": "import { isNat, Nat } from '@agoric/nat';",
      }),
    ],
  },
];
