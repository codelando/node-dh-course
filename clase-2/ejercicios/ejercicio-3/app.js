const chalk = require('chalk');
const moment = require('moment');

moment.locale('es');

const ahora = new moment();

const navidad = new moment(ahora.format('YYYY') + '-12-24');

// Verificamos si navidad ya pasó este año y si es el caso agregamos un año
// Seguro hay una mejor manera de hacer esto.
if (ahora.get('month') + 1 === 12 && ahora.get('date') > 24) {
    navidad.add(1, 'year');
}

console.log(chalk`{underline Hora actual}: ${ahora.format("hh:mm:ss")}`);
console.log(chalk`{underline Fecha actual}: ${ahora.format("DD [de] MMMM YYYY")}`);
console.log(chalk`{underline Días para navidad}: ${navidad.diff(ahora, 'days')}`);