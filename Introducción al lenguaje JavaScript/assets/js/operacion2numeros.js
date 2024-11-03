// se piden 2 numeros
let num1 = parseFloat(prompt("Ingresa el primer número (mayor a cero):"));
let num2 = parseFloat(prompt("Ingresa el segundo número (mayor a cero):"));

// Verificacion de los numeros
if (num1 > 0 && num2 > 0 && num1 !== num2) {
  // Suma
  let suma = num1 + num2;
  console.log("La suma es: " + suma);

  // Resta
  let resta = num1 - num2;
  console.log("La resta es: " + resta);

  // División
  let division = num1 / num2;
  console.log("La división es: " + division);

  // Multiplicación
  let multiplicacion = num1 * num2;
  console.log("La multiplicación es: " + multiplicacion);

  // Módulo
  let modulo = num1 % num2;
  console.log("El módulo es: " + modulo);
} else {
  console.log("Por favor ingresa dos números diferentes y mayores a cero.");
}
