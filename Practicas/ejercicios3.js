/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let nombre="Francisco"
let apellido="Chavez"
//console.log(nombre +" "+apellido)


// 2. Muestra la longitud de una cadena de texto
console.log(nombre.length)

// 3. Muestra el primer y último carácter de un string
console.log(nombre[0]+nombre[8])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let cadena = `esta no es
o si un acedana
de lineas muchas`
console.log(cadena)

// 6. Interpola el valor de una variable en un string

console.log(`Mi nombre es: ${nombre}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(nombre.replace("Francisco","Jose Francisco"))
let variable =nombre
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(nombre.includes("Jose"))

// 9. Comprueba si dos strings son iguales

console.log(nombre ===variable)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(nombre.length == variable.length)