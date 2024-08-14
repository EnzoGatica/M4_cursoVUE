//Veces a jugar
let cantidadRondas = parseInt(
  prompt("¿cuantas rondas de cachipun desea jugar?")
);

let i = 0;
for (i; i < cantidadRondas; i++) {
  //eleccion del usuario
  let manoUsuario;
  do {
    manoUsuario = prompt("Elige tu mano: Piedra, Papel o Tijera").toLowerCase();
  } while (
    manoUsuario != "piedra" &&
    manoUsuario != "papel" &&
    manoUsuario != "tijera"
  );

  //eleccion maquina

  let opciones = ["piedra", "papel", "tijera"];
  let intrucciones = Math.floor(Math.random() * 3);
  let jugadaMaquina = opciones[intrucciones];

  //Empieza el juego

  let resultado;
  if (manoUsuario == jugadaMaquina) {
    resultado = "Empate";
  } else if (
    (manoUsuario == "piedra" && jugadaMaquina == "tijera") ||
    (manoUsuario == "papel" && jugadaMaquina == "piedra") ||
    (manoUsuario == "tijera" && jugadaMaquina == "papel")
  ) {
    resultado = "Ganaste";
  } else {
    resultado = "Perdiste";
  }

  //Mostar elecciones

  console.log(`Tu mano era: ${manoUsuario}`);
  console.log(`la mano de la Maquina era: ${jugadaMaquina}`);
  console.log(`Resultado: ${resultado}`);

  //Declaracion de resultado
  let mensaje;
  if (resultado == "Ganaste") {
    mensaje = "Felicidades!!, eres el ganador de esta ronda!";
    console.log("Felicidades!!, eres el ganador de esta ronda!");
  } else if (resultado == "Perdiste") {
    mensaje = "lo siento, perdiste esta ronda";
    console.log("lo siento, perdiste esta ronda");
  } else {
    mensaje = "Es un empate";
    console.log("Es un empate");
  }

  document.write(`
    <div>
        <hr>
        <h2>Resultados juego numero ${i + 1} </h2>
        <p>Eleccion usuario: ${manoUsuario}</p>
        <p>Eleccion maquina: ${jugadaMaquina}</p>
        <p>Resultado: ${resultado} </p>
        <br>
        <p>${mensaje}</p>
    </div>
    `);
}
