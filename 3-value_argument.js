#!/usr/bin/env node
// 3-value_argument.js
// Script that prints the first argument passed, or "No argument" if none

const arg = process.argv[2];

if (arg === undefined) {
  console.log("No argument");
} else {
  console.log(arg);
}
