'use strict';

const readline = require('readline-sync');

const inputMiles = Number(readline.question('Enter miles: '));

const MILES_IN_KM = 1.60934;

const conversion = inputMiles * MILES_IN_KM;

const result = '\n' + inputMiles + ' miles is equal to ' + conversion +' kilometers';

console.log(result);