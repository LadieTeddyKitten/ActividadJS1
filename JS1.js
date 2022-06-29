
// Programa que suma dos números

console.log("\n Hola XD. Este programa suma dos números que son introducidos por el usuario. ");

// Bloque que ayuda input un valor dado por el usuario
"use strict";
const ps = require("prompt-sync");
const prompt = ps();


let x = Number(prompt("Escribe un número: "));
let y = Number(prompt("Escribe otro número: "));


// x=5;
// y=13;     // Valores que use al principio para verificar la función suma

let z = suma(x,y);


function suma(a,b){
    return (a+b)
} 

console.log(`La suma de ${x} y ${y} es: ` + z);
// console.log(typeof z);     // Lo use para verificar el type de la suma

/*     NOTA: Solo acepta número enteros o decimales, no los puedes escribir en fracción     */


