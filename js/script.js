// Aqui es donde se controlan los datos del juego, como el tablero, los rounds jugados y demas
const game = (() => {
  const board = [];

  for (let i = 0; i < 3; i++) {
    board[i] = [];
    for (let j = 0; j < 3; j++) {
      board[i][j] = Cell();
      board[i][j].id = i * 3 + j;
      console.log(board[i][j].id);
    }
  }
  let playerActual;
  console.log(board);

  return { board };
})();

//Factory objets para los jugadores
function player(playerName, playerToken) {
  let wins = 0;
  let token = playerName;
  let name = playerToken;
}

//Generador de objetos para las celdas
function Cell() {
  let value = 0;
  let id;

  const addToken = (p) => {
    value = p.token;
  };

  const getToken = () => {
    return value;
  };

  return { addToken, getToken };
}

//Esto controla todos losaspectos dejugabilidad del juego
function gameControler() {
  function putToken(p, c) {
    game.board[][]
  }
}
