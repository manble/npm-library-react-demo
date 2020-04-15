/**
* @description:
* @author: manble@live.com
* @created: 2020-04-10
*/
'use strict';
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: false,
        es6: true
    },
    extends: ['react-app'],
    plugins: [],
    rules: {
        'space-before-function-paren': 0,
        'import/no-extraneous-dependencies': 0,
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'import/no-unresolved': 'off',
        'no-param-reassign': ['error', {
            props: true,
            ignorePropertyModificationsFor: ['state', 'args']
        }
        ],
        'react/forbid-prop-types': 1,
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true
            }
        ]
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src']
            }
        }
    },
    globals: {
        'process': true
    }
}
