alert("Bienvenue à Puissance 4 le jeu!!")
var currentTurn = prompt('Player 1, choose Yellow or Red:');
var table;
var divGame;
const nRows = 6;
const nColumns = 7;
var redRow = 0;
var yellowRow = 0;
var redColumn = 0;
var yellowColumn = 0;
var gameOver = false;

function generateTable(nRows, nColumns) {
  table = document.createElement('table');
  divGame = document.getElementById('game');
  divGame.appendChild(table);
  for (var i = 0; i < nRows; i++) {
    const tr = document.createElement('tr');
    for (var j = 0; j < nColumns; j++) {
      const td = document.createElement('td');
      td.id = `${i}${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function mainGame() {
  const tds = document.querySelectorAll("td");

  tds.forEach(function (element) {

    element.addEventListener('click', jetonTurn);


  });
}

function jetonTurn(event) {
  if (gameOver) return;
  var id = event.target.id;
  var rowNumber = id.slice(0, 1);
  rowNumber = parseInt(rowNumber);
  rowNumber += 1;
  if (rowNumber === 6) rowNumber = 5;
  const columnNumber = id.slice(1, 2);
  const newId = `${rowNumber}${columnNumber}`;
  const newTdElement = document.getElementById(newId);


  if (currentTurn === 'Red' && (newTdElement.classList.contains("red") || newTdElement.classList.contains("yellow") || event.target.id.slice(0, 1) === '5')) {
    event.target.classList.add('red');
    event.target.innerText = "";
    event.target.removeEventListener('click', jetonTurn);
    currentTurn = 'Yellow';
    checkRow();
    checkColumn();
  }
  else if (currentTurn === 'Yellow' && (newTdElement.classList.contains("red") || newTdElement.classList.contains("yellow") || event.target.id.slice(0, 1) === '5')) {
    event.target.classList.add('yellow');
    event.target.removeEventListener('click', jetonTurn);
    currentTurn = 'Red';
    checkRow();
    checkColumn();
  }


}

function checkRow() {
  const tds = document.querySelectorAll('td');
  var td;
  for (let i = 0; i < nRows; i++) {
    redRow = 0;
    yellowRow = 0;
    for (let j = 0; j < nColumns; j++) {
      tds.forEach(function (element) {
        if (element.id === `${i}${j}`)
          td = element;
      });
      if (td.classList.contains('red'))
        redRow += 1;
      else if (td.classList.contains('yellow'))
        redRow = 0;
      if (td.classList.contains('yellow'))
        yellowRow += 1;
      else if (td.classList.contains('red'))
        yellowRow = 0;

      if (redRow === 4)
      {
      document.querySelector('h2').innerText = "Player Red Wins!";
      document.querySelector('h2').style.color = 'red';
      gameOver = true;
      }
      if (yellowRow === 4)
      {
      document.querySelector('h2').innerText = "Player Yellow Wins!";
      document.querySelector('h2').style.color = 'yellow';
      gameOver = true;
      }

    }

  }

}

function checkColumn() {
  const tds = document.querySelectorAll('td');
  var td;
  for (let i = 0; i < nColumns; i++) {
    redColumn = 0;
    yellowColumn = 0;
    for (let j = 0; j < nRows; j++) {
      tds.forEach(function (element) {
        if (element.id === `${j}${i}`)
          td = element;
      });
      if (td.classList.contains('red'))
        redColumn += 1;
      else if (td.classList.contains('yellow'))
        redColumn = 0;
      if (td.classList.contains('yellow'))
        yellowColumn += 1;
      else if (td.classList.contains('red'))
        yellowColumn = 0;

      if (redColumn === 4)
      {
        document.querySelector('h2').innerText = "Player Red Wins!";
        document.querySelector('h2').style.color = 'red';
        gameOver = true;
      }
      if (yellowColumn === 4)
      {
      document.querySelector('h2').innerText = "Player Yellow Wins!";
      document.querySelector('h2').style.color = 'yellow';
      gameOver = true;
      }


    }

  }

}

const btn = document.getElementById("btn");
btn.addEventListener('click', resetGame)

function resetGame()
{
  const tds = document.querySelectorAll("td");
  tds.forEach(function (element) {
    element.classList.remove('yellow');
    element.classList.remove('red');
  });
  currentTurn = prompt('Player 1, choose Yellow or Red:');
  gameOver = false;
  document.querySelector('h2').innerText = "";
  redColumn = 0;
  yellowColumn = 0;
  redRow = 0;
  yellowRow = 0;
  mainGame();
}

generateTable(nRows, nColumns);
mainGame();
