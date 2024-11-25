/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Francisco"
if(nombre == "Francisco"){
    console.log(nombre)
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "francis"
let contraseña = "jocflo320#"
if(usuario == "francis" && contraseña == "jocflo320#"){
    console.log("Usuario y contraseña correctos")
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0

if(numero >0) {
    console.log(`el numero: ${numero} es positivo`)
}else if(numero < 0) {
    console.log(`el numero: ${numero} es negativo`)
}else{
    console.log(`el numero es cero`)
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad =17
if(edad < 18) {
    console.log("Falta "+(18-edad)+" año para poder votar")
}else{
    console.log("Puede votar")
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad2 =12
let Mensaje = edad2 >= 18 ? "Adulto" : "Menor"
console.log(Mensaje)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes =9

if(mes <= 3){
    console.log(`el mes: ${mes} pertenece a primavera`)
}else if(mes <=6 && mes>3 ){
    console.log(`el mes: ${mes} pertenece a verano`)
}else if(mes <=9 && mes>6 ){
    console.log(`el mes: ${mes} pertenece a otoño`)
}else{
    console.log(`el mes: ${mes} pertenece a invierno`)
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if(mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    console.log(`el mes contiene 31 dias`)
}else if(mes ==2){
    console.log(`el mes es viciesto tine 28 o 29 dias`)
}else{
    console.log(`el mes contiene 30 dias`)
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let opt =1

switch(opt){
    case 0:
        console.log(`Saludo 1`)
        break
    case 1:
        console.log(`Saludo 2`)
        break
    case 2:
        console.log(`Saludo 3`)
        break
    case 3:
        console.log(`Saludo 4`)
        break
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes1 =2
switch(mes1){
    case 1:
        console.log(`Enero 31 dias Primavera`)
        break
    case 2:
        console.log(`Febrero 28 o 29 dias Primavera`)
        break
    case 3:
        console.log(`Marzo 31 dias Primavera`)
        break
    case 4:
        console.log(`Abril 30 dias Verano`)
        break
    case 5:
        console.log(`Mayo 31 dias Verano`)
        break
    case 6:
        console.log(`Junio 30 dias Verano`)
        break
    case 7:
        console.log(`Julio 31 dias Otoño`)
        break
    case 8:
        console.log(`Agosto 31 dias Otoño`)
        break
    case 9:
        console.log(`Septiembre 30 dias Otoño`)
        break
    case 10:
        console.log(`Octubre 31 dias Invierno`)
        break
    case 11:
        console.log(`Noviembre 30 dias Invierno`)
        break
    case 12:
        console.log(`Diciembre 31 dias Invierno`)
        break
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7