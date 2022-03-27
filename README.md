### install

add dev deps

`"eslint-configs": "https://github.com/teivienn/eslint-config",`

```js
// .eslintrc.js

const eslint = require("eslint-config/native/eslint")
// or
const eslint = require("eslint-config/backend/eslint")
// of
const eslint = require("eslint-config/frontend/eslint")

module.exports = {
  ...eslint,
  parserOptions: {
    ...eslint.parserOptions,
    project: ["./tsconfig.json"],
  },
  rules: {
    ...eslint.rules,
    // if you need add custom riles
  },
}
```

```json
// tsconfig.json

{
  "extends": "eslint-config/native/tsconfig.json",
  // or
  "extends": "eslint-config/backend/tsconfig.json",
  // or
  "extends": "eslint-config/frontend/tsconfig.json",

  ...
}

```

```js
// .prettierrc.js

module.exports = require("eslint-config/native/prettier")
// or
module.exports = require("eslint-config/backend/prettier")
// or
module.exports = require("eslint-config/frontend/prettier")
```

### rules

```js
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          { pattern: '~/**', group: 'internal' },
          { pattern: './**', group: 'sibling' },
        ],
      },
    ],

        'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@react-navigation/core',
            importNames: ['useRoute'],
            message: 'Please import useNavigation / useRoute from ~/navigation instead.',
          },
          {
            name: '@react-navigation/native',
            importNames: ['useTheme'],
            message: "Please don't use",
          },
        ],
      },
    ],
```
