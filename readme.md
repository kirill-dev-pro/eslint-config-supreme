# Supreme eslint config

This is a all-in-one configuration based on personal preferences of the creator. Tuned to work with JS and TS and support on-save fixes in IDE.

## Setup 

1. Install with `npm`
```sh
npm install eslint-config-supreme
```
* or with `bun`
```sh
bun add eslint-config-supreme
```
2. Add `.eslintrc.js` config file to root of your project
```js
module.exports = {
  extends: 'supreme',
}
```

### Optional

Add on-save fix to vs-code 

1. Istall `Eslint` extension for VS code. Extension id `dbaeumer.vscode-eslint`

* VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

2. Add `.vscode/settings.json` file to root of your project
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```
