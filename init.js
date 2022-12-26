#!/usr/bin/env node

console.log('eslint-config-supreme init')

const fs = require("fs")
const { execSync } = require("child_process")

fs.createWriteStream(".eslintrc.json")
  .write(JSON.stringify({ "extends": "supreme" }))
  .end()

try {
  execSync("bun")
  execSync("bun add eslint-config-supreme")
} catch (error) {
  execSync("npm install --save-dev eslint-config-supreme")
}
