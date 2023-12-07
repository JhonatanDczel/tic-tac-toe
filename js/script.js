// gameControlerFactory es una funcion flecha almenado en una constante de modo que si esta abajo nada de lo
// que esta arriba podra acceder a el, en cambio si usamos una funcion normal /function gameControlerFactory() si
// podria ya que Js tiene algo llamado hoisting que eleva las funciones para que estas sean accesibles
const gameControlerFactory = (b) => {
  function putToken(player, cellIndex) {
    b[cellIndex].addToken(player);
    console.log(b[cellIndex]);
    console.table(b);
  }

  function clearBoard() {
    for (let i = 0; i < 9; i++) {
      b[i] = [];
      b[i] = Cell(i);
    }
  }
  return { putToken, clearBoard };
}

function DisplayControler(b) {
  function refreshDisplay() {
    b.forEach(c => {
      const button = document.getElementById(c.id);
      button.textContent = c.getToken();
    });
    console.table(b);
    show("Datos actualizados");
  }

  (function generateCells() {
    b.forEach(c => {
      const cell = document.createElement("button");
      const cellContainer = document.querySelector(".cell-container");
      cellContainer.appendChild(cell);
      cell.id = c.id;
      cell.classList.add("cell");
    });
  })();
  return { refreshDisplay };
}
// Aqui es donde se controlan los datos del juego, como el tablero, los rounds jugados y demas
// le pasamos board a gameControlerFactory, y como los arrays son objetos lo podras modificar desde afuera
const game = (() => {
  const computer = Computer("Computer", "o");
  const user = User("User", "x");
  const board = [];
  const gameControler = gameControlerFactory(board);
  gameControler.clearBoard();
  let playerActual;
  const displayControler = DisplayControler(board);

  displayControler.refreshDisplay();

  return { board, gameControler, computer, user, displayControler };
})();

//Factory objets para los jugadores
function Player(playerName, playerToken) {
  let wins = 0;
  let name = playerName;
  let token = playerToken;
  return { name, token };
}

function User(userName, userToken) {
  const player = Player(userName, userToken)
  return Object.assign({}, player, {});
}

function Computer(computerName, computerToken) {
  const player = Player("Computer", "o");

  return Object.assign({}, player, {});
}

//Generador de objetos para las celdas
function Cell(cellID) {
  let value = " ";
  let id = cellID;

  const addToken = (p) => {
    value = p.token;
  };

  const getToken = () => {
    return value;
  };

  return { addToken, getToken, id };
}

