/* 6. Funciones */

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

function suma(a, b) {
    return a + b;
}

var resultadoA = suma(10, 5);
console.log(resultadoA);

/* b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado. */

function sumaB(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    return a + b;
}

var resultadoB = sumaB(10, "hola");
console.log(resultadoB);

/* c. Crear una función validateInteger que reciba un número como parámetro y devuelva verdadero si es un número entero. */

function validateInteger(n) {
    return Number.isInteger(n);
}

console.log(validateInteger(5));
console.log(validateInteger(5.3));

/* d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado). */

function sumaD(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    if (!Number.isInteger(a)) {
        alert("El parámetro a tiene decimales, se redondeará");
        a = Math.round(a);
    }
    if (!Number.isInteger(b)) {
        alert("El parámetro b tiene decimales, se redondeará");
        b = Math.round(b);
    }
    return a + b;
}

var resultadoD = sumaD(3.7, 2.2);
console.log(resultadoD);

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual. */

function validarEntero(n, nombre) {
    if (!Number.isInteger(n)) {
        alert("El parámetro " + nombre + " tiene decimales, se redondeará");
        return Math.round(n);
    }
    return n;
}

function sumaE(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("Uno de los parámetros tiene error");
        return NaN;
    }
    a = validarEntero(a, "a");
    b = validarEntero(b, "b");
    return a + b;
}

var resultadoE = sumaE(4.9, 3.1);
console.log(resultadoE);
