const chalk = require('chalk');
const calculadora = require('./calculadora.js');

const num1 = 3;
const num2 = 7;

console.log(chalk`La suma de ${num1} y ${num2} es {yellow.bold ${calculadora.suma(num1, num2)}}`);
console.log(chalk`La resta de ${num1} y ${num2} es {yellow.bold ${calculadora.resta(num1, num2)}}`);
console.log(chalk`La multiplica de ${num1} y ${num2} es {yellow.bold ${calculadora.multiplica(num1, num2)}}`);
console.log(chalk`La divide de ${num1} y ${num2} es {yellow.bold ${calculadora.divide(num1, num2)}}`);