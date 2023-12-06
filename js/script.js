// Aqui es donde se controlan los datos del juego, como el tablero, los rounds jugados y demas
const game = (() => {
  const gameControler = gameControlerFactory();
  const board = [];
  gameControler.clearBoard();

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

//Esto controla todos los aspectos dejugabilidad del juego

let gameControlerFactory = () => {
  function putToken(player, cell) {
    game.board[cell] = player.token;
  }

  function clearBoard() {
    for (let i = 0; i < 9; i++) {
      game.board[i] = [];
      game.board[i] = Cell(i);
      console.log(board[i].id);
    }
  }
  return { putToken, clearBoard };
}
