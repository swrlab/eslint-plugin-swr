# SWR eslint plugin

## Install

```sh
npm add -D eslint @swrlab/swr-eslint-plugin
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

* https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/README.md
* https://github.com/prettier/eslint-plugin-prettier
* https://github.com/SonarSource/eslint-plugin-sonarjs
* https://github.com/sindresorhus/eslint-plugin-unicorn
* https://github.com/nodesecurity/eslint-plugin-security
* https://github.com/jest-community/eslint-plugin-jest
