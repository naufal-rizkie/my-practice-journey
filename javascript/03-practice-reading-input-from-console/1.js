'use strict'

const readline = require('readline-sync');

const inputFirstNum = Number(readline.question('Enter first number: '));
const inputSecondNum = Number(readline.question('Enter second number: '));
const inputThirdNum = Number(readline.question('Enter third number: '));

const average = (inputFirstNum + inputSecondNum + inputThirdNum) / 3;

const result = '\nThe average of ' + inputFirstNum + ', ' + inputSecondNum + ', ' + inputThirdNum + ' is ' + average;

console.log(result);