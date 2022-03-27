module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      'rules': {
        '@typescript-eslint/*': ['off']
      }
    },
    {
      files: [
        '*.spec.ts',
        '*.spec.tsx',
        '*.spec.js',
        '*.spec.jsx',
        '*.test.ts',
        '*.test.tsx',
        '*.test.js',
        '*.test.jsx',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
}
