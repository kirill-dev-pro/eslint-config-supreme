#!/usr/bin/env node

console.log('eslint-config-supreme init')

const fs = require("node:fs")
const { execSync } = require("node:child_process")

let runtime = "node"
// check if runtime is deno
if (process.argv[0].includes("deno")) {
  runtime = "deno"
}
// check if runtime is bun
if (process.argv[0].includes("bun")) {
  runtime = "bun"
}

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

if (runtime === "bun") {
  execSync("bun add -d eslint-config-supreme")
} else if (runtime === "deno") {
  // TODO: add deno support
  console.log('Deno runtime not supported yet, instalation skipped')
} else {
  execSync("npm install --save-dev eslint-config-supreme")
}