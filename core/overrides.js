module.exports = [
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
]
