'use strict';

const readline = require('readline-sync');

const inputFirstNum = Number(readline.question('Enter first number: '));

const inputSecondNum = Number(readline.question('Enter second number: '));

const inputUsersAnswer = Number(readline.question(`What is ${inputFirstNum} + ${inputSecondNum}? `));

const isTrue = inputFirstNum + inputSecondNum === inputUsersAnswer;

const result = `${inputFirstNum} + ${inputSecondNum} = ${inputUsersAnswer} is ${isTrue}`;

console.log(result);