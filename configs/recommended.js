module.exports = {
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 6,
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
  },
	plugins: ['prettier', 'security', 'sonarjs'],
	extends: ['plugin:sonarjs/recommended', 'eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['warn', {
      printWidth: 120,
      tabWidth: 8,
      useTabs: true,
    }],
  },
};
