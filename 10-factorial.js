#!/usr/bin/env node
// 10-factorial.js
// Script that computes and prints a factorial using recursion

function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const num = parseInt(process.argv[2]);
console.log(factorial(num));
