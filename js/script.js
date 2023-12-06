// Aqui es donde se controlan los datos del juego, como el tablero, los rounds jugados y demas
const game = (() => {
  const board = [];

  for (let i = 0; i < 9; i++) {
    board[i] = [];
    board[i] = Cell(i);
    console.log(board[i].id);
  }
  let playerActual;
  console.log(board);

  return { board };
})();

//Factory objets para los jugadores
function player(playerName, playerToken) {
  let wins = 0;
  let name = playerName;
  let token = playerToken;
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

//Esto controla todos losaspectos dejugabilidad del juego
function gameControler() {
  function putToken(player, cell) {
    game.board[cell] = player.token;
  }
}
