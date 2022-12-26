module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'standard',
    'standard-jsx',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/'],
  plugins: ['react', 'import', '@typescript-eslint', 'tailwindcss'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false,
        arrowParens: 'avoid',
        trailingComma: 'all',
        printWidth: 100,
      },
      {
        usePrettierrc: false,
      }
    ],
    'react/jsx-closing-tag-location': 0,
    'react/jsx-handler-names': 0,
    'jsx-a11y/accessible-emoji': 0,
    'no-prototype-builtins': 0,
    'max-len': ['warn', { code: 100, ignoreComments: true }],
    indent: 0,
    'import/order': [
      'error',
      {
        groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin'],
      },
    ],
    "tailwindcss/no-custom-classname": "off",
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  // https://github.com/babel/babel/issues/10904
  parser: '@typescript-eslint/parser',
}
