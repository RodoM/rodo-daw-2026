/* 3. Arrays */

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

/* a. Dado el siguiente array de meses, mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log(meses[4]);
console.log(meses[10]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

var mesesOrdenados = [...meses].sort();
console.log(mesesOrdenados);

/* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

meses.unshift("MesInicio");
meses.push("MesFin");
console.log(meses);

/* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

meses.shift();
meses.pop();
console.log(meses);

/* e. Invertir el orden del array (utilizar reverse). */

var mesesInvertidos = [...meses].reverse();
console.log(mesesInvertidos);

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join). */

var mesesUnidos = meses.join("-");
console.log(mesesUnidos);

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

var mayoANoviembre = meses.slice(4, 11);
console.log(mayoANoviembre);
