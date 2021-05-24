module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        // 'plugin:eslint-comments/recommended',
        // 'prettier/@typescript-eslint',
        'prettier',
        'plugin:prettier/recommended'
    ],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-var-requires': 'off',
        'react/prop-types': 'off',
        // suppress errors for missing 'import React' in files
        'react/react-in-jsx-scope': 'off'
        // allow jsx syntax in js files (for next.js project)
        // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }], //should add ".ts" if typescript project
    }
}
