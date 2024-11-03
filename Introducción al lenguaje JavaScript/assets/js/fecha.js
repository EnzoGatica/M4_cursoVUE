// Solicitar dias
let totalDias = parseInt(prompt("Ingresa la cantidad de días:"));

// calculo en años
let años = Math.floor(totalDias / 365);
let diasRestantes = totalDias % 365;

// calculo en semanas
let semanas = Math.floor(diasRestantes / 7);

// calculo en dias restantes
let dias = diasRestantes % 7;

console.log(`${totalDias} días son equivalentes a ${años} años, ${semanas} semanas y ${dias} días.`);
