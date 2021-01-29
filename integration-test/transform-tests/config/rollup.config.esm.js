import replace from '@rollup/plugin-replace';

export default [
  {
    input: '../test/test-nat.js',
    output: {
      file: 'transform-tests/output/test.esm.js',
      format: 'esm',
    },
    external: ['@agoric/nat', 'ava'],
    plugins: [
      replace({
        delimiters: ['', ''],
        "import { isNat, Nat } from '../src/index';": "import { isNat, Nat } from '@agoric/nat';",
      }),
    ],
  },
];
