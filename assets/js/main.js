// import { multiplicar, nombre } from "./repasoClaseAnterior.js";
// import saludo from "./repasoClaseAnterior.js";

// console.log(multiplicar(5)) //10
// console.log(nombre) //Katherine
// console.log(saludo("Lorena")) //Hola Lorena


//--------------------- Clase 5 sesion 3 -----------------------

// // FOR --> El bucle for es un contador..

// const frutas = ["manzana", "naranja", "pera", "kiwi", "uva"]
// const animales = ["Leon", "Tigre", "Tortuga"]


// for (let i = 0; i < frutas.length; i++) {
//     console.log(animales[i])    
// } //leon, tigre, tortuga, undefined, undefined

//---------------------------------------
// for..in
// El bucle for...in se utiliza para iterar sobre las propiedades de un objeto. Recorre los nombres de las propiedades (o índices si se trata de arrays), no los valores. Es útil cuando trabajas con objetos o cuando necesitas las claves de un objeto.
// Ventajas:
// Se utiliza para iterar sobre las propiedades de un objeto.
// Ideal para acceder a las claves de un objeto.

// const alumnosChat = {
//     nombre: "Rodolfo",
//     apellido: "Sanchez",
//     curso: "nocturno"
// }
// for (const key in alumnosChat) {
//     console.log(key)
// }  // nombre, apellido, curso

// for (const key in alumnosChat) {
//     console.log(alumnosChat[key])
// } // Rodolfo, Sanchez, nocturno

// for (const key in alumnosChat) {
//     console.log(`el ${key} del alumno chat es ${alumnosChat[key]}`)
// }

// //el nombre del alumno chat es Rodolfo
// //el apellido del alumno chat es Sanchez
// //el curso del alumno chat es nocturno

//------------------------------------
//for of

// const numeros =  [10, 15, 25, 8] //quiero esto multiplicado = 30_000

// var resultado = 1
// for (const element of numeros) {
//     resultado = resultado * element
// }
// console.log(resultado)


//------------------------------------------
//Ejercicios

//1
import { sumarElementos } from "./suma.js";

const numeros = [10,20,30,100]
console.log(sumarElementos(numeros))

//2
import { stringMasLargo } from "./string.js";

const palabras = ['JavaScript', 'HTML', 'CSS'];
console.log(stringMasLargo(palabras)) 

//3
import { mostrarNombres } from "./personas.js";

const personas = [
    { nombre: 'Ana' },
    { nombre: 'Luis' },
    { nombre: 'Carlos' }
];

mostrarNombres(personas)

//4
import { mostrarPropiedades } from "./propiedades.js";

const auto = {
    marca: "Fiat",
    modelo: "uno",
    año: 2009
}

mostrarPropiedades(auto)
//5
import { duplicarArray } from "./duplicar.js";
const numerosParaDuplicar = [1,2,500]
console.log(duplicarArray(numerosParaDuplicar))