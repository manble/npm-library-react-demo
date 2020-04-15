/**
* @description:
* @author: manble@live.com
* @created: 2020-04-10
*/
'use strict';

import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';

import pkg from './package.json';

export default {
    input: 'src/index.js',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: pkg.module,
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        external(),
        url(),
        resolve(),
        babel({
            exclude: "node_modules/**"
        }),
        postcss({
            modules: true,
            plugins: [autoprefixer()]
        })
    ].concat(!process.env.ROLLUP_WATCH ? [terser()] : [])
}
