// se solicitan 5 numeros
let numA = parseFloat(prompt("Ingresa el primer número:"));
let numB = parseFloat(prompt("Ingresa el segundo número:"));
let numC = parseFloat(prompt("Ingresa el tercer número:"));
let numD = parseFloat(prompt("Ingresa el cuarto número:"));
let numE = parseFloat(prompt("Ingresa el quinto número:"));

// Calcular la suma de los cinco números
let sumaTotal = numA + numB + numC + numD + numE;
console.log("La suma de los cinco números es: " + sumaTotal);

// Calcular el promedio de los cinco números
let promedio = sumaTotal / 5;
console.log("El promedio de los cinco números es: " + promedio);
