module.exports = {
    env: {
      node: true,
    },
    plugins: [
      'import',
      'promise',
      'eslint-comments',
    ],
    extends: [
      'airbnb-base',
      'plugin:import/recommended',
      'plugin:promise/recommended',
      'plugin:eslint-comments/recommended',
    ],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
      },
    },
    rules: {
      'space-before-function-paren': ['error', 'always'],
      'no-underscore-dangle': 0,
      'import/no-unresolved': 0,
      'import/extensions': 0,
      'no-shadow': 0,
      'linebreak-style': ['error', 'unix'],
      'import/prefer-default-export': 0,
      'max-len': ['error', { code: 250 }],
      curly: 1,
      'import/no-cycle': [2, { maxDepth: 1 }],
    },
    overrides: [
      {
        files: ['**/*.ts', '**/*.tsx', '*.ts', '*.tsx'],
        excludedFiles: '*.spec.ts',
        plugins: [
          '@typescript-eslint',
          'promise',
          'eslint-comments',
        ],
        extends: [
          'airbnb-base',
          'airbnb-typescript/base',
          'plugin:import/typescript',
          'plugin:@typescript-eslint/recommended',
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
          'plugin:promise/recommended',
          'plugin:eslint-comments/recommended',
        ],
        parser: '@typescript-eslint/parser',
        parserOptions: {
          ecmaVersion: 2020,
          project: './tsconfig.json',
          sourceType: 'module',
        },
        rules: {
          'import/prefer-default-export': 0,
          'max-len': ['error', { code: 250 }],
          '@typescript-eslint/no-non-null-assertion': 0,
          '@typescript-eslint/explicit-member-accessibility': [
            'error', {
              accessibility: 'explicit',
              overrides: {
                accessors: 'explicit',
                constructors: 'no-public',
                methods: 'explicit',
                properties: 'off',
                parameterProperties: 'explicit',
              },
            },
          ],
          '@typescript-eslint/explicit-function-return-type': 1,
          'import/no-cycle': [2, { maxDepth: 1 }],
        },
      }
    ],
}
