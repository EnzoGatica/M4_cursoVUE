// número y validarlo
const obtenerNumero = () => {
    let numero = parseInt(prompt("Ingresa un número entre 1 y 20:"));
    if (numero < 1 || numero > 20) {
      console.log("Número fuera del rango");
      return null;
    }
    return numero;
  };
  
  // tabla de multiplicar y el factorial
  const mostrarResultados = (num) => {
    // Mostrar la tabla de multiplicar
    console.log(`Tabla de multiplicar del ${num}:`);
    for (let i = 1; i <= num; i++) {
      console.log(`${i} x ${num} = ${i * num}`);
    }
  
    // Calcular y mostrar
    console.log(`Factoriales hasta el número ${num}:`);
    for (let i = 1; i <= num; i++) {
      let factorial = 1;
      for (let j = 1; j <= i; j++) {
        factorial *= j;
      }
      console.log(`Factorial de ${i} es: ${factorial}`);
    }
  };
  
  // Función principal
  const ejecutarPrograma = () => {
    const numero = obtenerNumero();
    if (numero) {
      mostrarResultados(numero);
    }
  };
  
  // Ejecutar el programa
  ejecutarPrograma();
  