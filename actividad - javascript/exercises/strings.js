/* 2. Strings */

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase). */

var textoA = "hola mundo desde javascript";
var mayusculas = textoA.toUpperCase();
console.log(mayusculas);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring). */

var textoB = "programacion web";
var primerosCinco = textoB.substring(0, 5);
console.log(primerosCinco);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

var textoC = "desarrollo web";
var ultimosTres = textoC.substring(textoC.length - 3);
console.log(ultimosTres);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

var textoD = "jAVASCRIPT ES GENIAL";
var primeraMayuscula = textoD.substring(0, 1).toUpperCase() + textoD.substring(1).toLowerCase();
console.log(primeraMayuscula);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

var textoE = "hola mundo javascript";
var posicionEspacio = textoE.indexOf(" ");
console.log(posicionEspacio);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

var textoF = "jAVASCRIPT pROGRAMACION";
var espacio = textoF.indexOf(" ");
var palabra1F = textoF.substring(0, espacio).toLowerCase();
var palabra2F = textoF.substring(espacio + 1).toLowerCase();
var resultado = palabra1F.substring(0, 1).toUpperCase() + palabra1F.substring(1) + " " + palabra2F.substring(0, 1).toUpperCase() + palabra2F.substring(1);
console.log(resultado);
