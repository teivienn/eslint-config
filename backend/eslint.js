const plugins = require('../core/plugins');
const overrides = require('../core/overrides');
const extendsOptions = require('../core/extends');
const commonRules = require('../core/rules');

module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    ...extendsOptions['common'],
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    ...plugins['common'],
  ],
  overrides: [
    ...overrides,
  ],
  rules: {
    ...commonRules['common'],
  }
}
