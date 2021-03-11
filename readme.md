# SWR eslint plugin

## Install

```sh
npm add -D eslint eslint-plugin-swr
```

Include in `.eslintrc.json`:

```json
{
  "root": true,
  "plugins": ["swr"],
  "extends": ["plugin:swr/recommended"]
}
```

## Credits

This config uses following plugins:

- [eslint-config-airbnb-base](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/README.md)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)
- [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
