// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const minify = process.env.BUILD === 'production';

const inputs = [
    'scripts/fluentui-bundle.js'
];

const result = inputs.map(i => ({
    input: i,
    output: {
        dir: 'wwwroot',
        format: 'es',
        sourcemap: !minify
    },
    plugins: [
        resolve({ browser: true }),
        commonjs(),
        minify &&
        terser({
            ecma: 6,
            compress: true,
            output: {
                beautify: !minify
            }
        })
    ]
}));

export default result;