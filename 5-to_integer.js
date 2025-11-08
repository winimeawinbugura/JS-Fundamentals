#!/usr/bin/env node
// 5-to_integer.js
// Script that prints an integer if possible, otherwise "Not a number"

const arg = process.argv[2];
const converted = parseInt(arg);

if (isNaN(converted)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${converted}`);
}
