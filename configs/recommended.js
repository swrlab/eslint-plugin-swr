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
  plugins: ['prettier', 'security', 'airbnb-base'],
  extends: ['eslint:recommended', 'plugin:airbnb-base'],
  rules: {
  },
};
