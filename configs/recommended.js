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
  plugins: ['prettier', 'security', 'sonarjs', 'airbnb-base'],
  extends: ['plugin:sonarjs/recommended', 'eslint:recommended', 'plugin:airbnb-base', 'plugin:prettier/recommended'],
  rules: {
  },
};
