// gameControlerFactory es una funcion flecha almenado en una constante de modo que si esta abajo nada de lo
// que esta arriba podra acceder a el, en cambio si usamos una funcion normal /function gameControlerFactory() si
// podria ya que Js tiene algo llamado hoisting que eleva las funciones para que estas sean accesibles
const gameControlerFactory = (b) => {
  function putToken(player, cell) {
    b[cell] = player.token;
  }

  function clearBoard() {
    for (let i = 0; i < 9; i++) {
      b[i] = [];
      b[i] = Cell(i);
    }
  }
  return { putToken, clearBoard };
}
// Aqui es donde se controlan los datos del juego, como el tablero, los rounds jugados y demas
// IIFE supongo que es para tener seugridad que no alteraran tu codigo desde afuera
// gameControlerFactory intentaba accedera a board atraves de game pero game aun no entregaba board, aqui se lo pasamos como parametro
// le pasamos board a gameControlerFactory, y como los arrays son objetos lo podras modificar desde afuera
const game = (() => {
  const computer = Player("Computer", "o");
  const user = Player("User", "x");
  const board = [];
  const gameControler = gameControlerFactory(board);
  gameControler.clearBoard();

  let playerActual;

  return { board, gameControler, computer, user };
})();

//Factory objets para los jugadores
function Player(playerName, playerToken) {
  let wins = 0;
  let name = playerName;
  let token = playerToken;
  return { name, token };
}

function Computer(computerName, computerToken) {
  const player = Player("Computer", "o");

  return Object.assign({}, player, {});
}

//Generador de objetos para las celdas
function Cell(cellID) {
  let value = 0;
  let id = cellID;

  const addToken = (p) => {
    value = p.token;
  };

  const getToken = () => {
    return value;
  };

  return { addToken, getToken, id };
}

//Esto controla todos los aspectos dejugabilidad del juego

