// se pide temperatura
let celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));

// pasar a Kelvin
let kelvin = celsius + 273.15;
console.log("La temperatura en Kelvin es: " + kelvin);

// pasar a Fahrenheit
let fahrenheit = (celsius * 9/5) + 32;
console.log("La temperatura en Fahrenheit es: " + fahrenheit);
