const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplica = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : undefined;

module.exports = { suma, resta, multiplica, divide };