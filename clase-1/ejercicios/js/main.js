// Salto de línea en consola
// https://stackoverflow.com/questions/16239474/when-tracing-out-variables-in-the-console-how-to-create-a-new-line

// Helper para imprimir títulos en consola
function consoleTitle(title) {
  console.log(
    '\n'
    + title + '\n'
    + '~'.repeat(title.length)
  );
};

// Ejercicio 1
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

consoleTitle('Ejercicio 1');

const inventario = [
  {tipo: "maquina", valor: 5000},
  {tipo: "maquina", valor:  650},
  {tipo: "silla",   valor:   10},
  {tipo: "sillon",  valor: 1200},
  {tipo: "maquina", valor:   77}
]

let valorTotalMaquina = inventario.filter(item => item.tipo == "maquina").reduce((total, item) => total + item.valor, 0);

console.log(valorTotalMaquina);

