'use strict';

const readline = require('readline-sync');

const inputSeconds = Number(readline.question('Enter seconds: '));

const MINUTES_IN_SECONDS = 60;

const conversionSecToMin = Math.trunc(inputSeconds / MINUTES_IN_SECONDS);

const remainderSec = inputSeconds % MINUTES_IN_SECONDS;

const result = `\n${inputSeconds} seconds is ${conversionSecToMin} minutes and ${remainderSec} seconds`;

console.log(result);