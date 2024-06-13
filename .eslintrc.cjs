module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'prettier',
    'react-refresh',
    'perfectionist',
    '@typescript-eslint',
  ],
  rules: {
    'perfectionist/sort-interfaces': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],

    '@typescript-eslint/naming-convention': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'no-console': ['error', { allow: ['error'] }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      {
        usePrettierrc: true,
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-filename-extension': 'off',
    'perfectionist/sort-enums': 'off',
    'perfectionist/sort-objects': ['error', { type: 'line-length' }],
    'perfectionist/sort-exports': ['error', { type: 'line-length' }],
    'perfectionist/sort-jsx-props': ['error', { type: 'line-length' }],
    'perfectionist/sort-interfaces': ['error', { type: 'line-length' }],
    'perfectionist/sort-object-types': ['error', { type: 'line-length' }],
    'perfectionist/sort-named-exports': ['error', { type: 'line-length' }],
    'perfectionist/sort-named-imports': ['error', { type: 'line-length' }],
    'perfectionist/sort-array-includes': ['error', { type: 'line-length' }],
    'perfectionist/sort-union-types': [
      'error',
      { type: 'line-length', 'nullable-last': true },
    ],
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'line-length',
        groups: [
          'type',
          'react',
          'nanostores',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown',
        ],
      },
    ],
  },
};
