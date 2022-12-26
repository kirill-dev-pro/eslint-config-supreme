#!/usr/bin/env node

console.log('eslint-config-supreme init')

const fs = require("node:fs")
const { execSync } = require("node:child_process")

const config = fs.openSync(".eslintrc.json", "w")
fs.writeFileSync(config, JSON.stringify({ "extends": "supreme" }))
console.log('added .eslintrc.json')

if (!fs.existsSync(".vscode/settings.json")) {
  try {
    fs.mkdirSync(".vscode", { recursive: true })
    const vscodeSettings = fs.openSync(".vscode/settings.json", "w")
    fs.writeFileSync(vscodeSettings, JSON.stringify({
      "editor.codeActionsOnSave": { "source.fixAll": true }
    }))
    console.log('added .vscode/settings.json')
  } catch (error) {
    console.log('skipped .vscode/settings.json')
  }
} else {
  console.log('found existing .vscode/settings.json, skipped')
}

try {
  execSync("bun")
  execSync("bun add eslint-config-supreme")
} catch (error) {
  execSync("npm install --save-dev eslint-config-supreme")
}
