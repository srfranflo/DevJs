/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
a = 1+2
b=1-2
c=1/2
d=1*2
e=1%2
f=1**2
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
a+=4
b-=2
c/=1
d*=3
e%=1
f**=3

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
// console.log(5<10)
// console.log(10>5)
// console.log(5<=10)
// console.log(5==5)
// console.log(5!=4)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
// console.log(5<4)
// console.log(1>5)
// console.log(5<=4)
// console.log(5==4)
// console.log(5!=5)

// 5. Utiliza el operador lógico and
console.log(5<10 && 10<20)
// 6. Utiliza el operador lógico or

console.log(3>2 || 3 ==3)

// 7. Combina ambos operadores lógicos

console.log(3>2 && 2==3 || 3==3)

// 8. Añade alguna negación
console.log(3>2 && 2==3 || !(3==3))

// 9. Utiliza el operador ternario

let variableBoolean = false

variableBoolean ? console.log("Verdadero"):console.log("Falso")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log(3>2 && 2==3 || !(3==3) || (3*3)==9)
