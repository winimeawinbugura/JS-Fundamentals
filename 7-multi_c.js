#!/usr/bin/env node
// 7-multi_c.js
// Script that prints "C is fun" x times

const x = parseInt(process.argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}
