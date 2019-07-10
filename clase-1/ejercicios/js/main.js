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

// Ejercicio 2
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

consoleTitle('Ejercicio 2');

// function ArrayOrdenado(comparar) {
//   this.comparar = comparar;
//   this.contenido = [];
// }
// ArrayOrdenado.prototype.encontrarPos = function(elt) {
//   for (var i = 0; i < this.contenido.length; i++) {
//     if (this.comparar(elt, this.contenido[i]) < 0) break;
//   }
//   return i;
// }
// ArrayOrdenado.prototype.insertar = function(elt) {
//   this.contenido.splice(this.encontrarPos(elt), 0, elt);
// }

// arr.findIndex(callback[, thisArg])
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/findIndex
// ---
// El método findIndex() devuelve el índice del primer elemento de un array que
// cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

// Discusión de diferentes métodos para lograr este objetivo.
// https://stackoverflow.com/questions/42946561/how-can-i-push-an-element-into-array-at-a-sorted-index-position

class ArrayOrdenado {
  constructor(comparar) {
    this.contenido = [];
    this.comparar = comparar;
  }
  // Encuentra la posición donde debería ir un determinado elemento según el orden.
  encontrarPos(elem) {
    let index = this.contenido.findIndex(a => this.comparar(elem, a) < 0);
    return index >= 0 ? index : this.contenido.length;
  }

  // inserta el elemento en la posición correspondiente según el orden.
  insertar(elem) {
    this.contenido.splice(this.encontrarPos(elem), 0, elem);
  }
}

var ordenado = new ArrayOrdenado((a, b) => a - b );
ordenado.insertar(1);
ordenado.insertar(60);
ordenado.insertar(100);
ordenado.insertar(5);
ordenado.insertar(5);
ordenado.insertar(2);
ordenado.insertar(4);
ordenado.insertar(3);
ordenado.insertar(8);
console.log("array:", ordenado.contenido);

// Alternativa

// arr.sort([compareFunction])
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort
// ---
// El método sort() ordena los elementos de un array localmente y devuelve el array ordenado.


class orderedArray {
  constructor(compare) {
    this.compare = compare;
    this.content = [];
  }
  orderedPush(element) {
    this.content.push(element);
    this.content.sort(this.compare);

  }
}

var ordered = new orderedArray((a, b) => a - b );
ordered.orderedPush(1);
ordered.orderedPush(60);
ordered.orderedPush(100);
ordered.orderedPush(5);
ordered.orderedPush(5);
ordered.orderedPush(2);
ordered.orderedPush(4);
ordered.orderedPush(3);
ordered.orderedPush(8);
console.log("array:", ordered.content);

// Ejercicio 3
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

consoleTitle('Ejercicio 3');

// Los parámetros se declaran como "variables" en el orden en el que están en la
// función, eso quiere decir que si queremos acceder a un parámetro "a" desde otro
// parámetro "b", "a" debe declararse antes que "b".

function ultimoIndiceDe(arr, elt, inicio = arr.length - 1) {
  for (let i = inicio; i >= 0; i--)
    if (arr[i] === elt) return i
  return -1
}

console.log(ultimoIndiceDe([1, 2, 1, 2], 2))

// arr.lastIndexOf(searchElement[, fromIndex])
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/lastIndexOf
// ---
// El método lastIndexOf() devuelve el último índice en el que un cierto
// elemento puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara.
// El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.
// ---
// arr.lastIndexOf(searchElement, fromIndex)


console.log([1, 2, 1, 2].lastIndexOf(2));