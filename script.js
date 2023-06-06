var currentTurn = prompt('Player 1, choose Yellow or Red:');
var table;
var divGame;
const nRows = 6;
const nColumns = 7;
var redRow = 0;
var yellowRow = 0;
var redColumn = 0;
var yellowColumn = 0;
var ele1, ele2, ele3, ele4, ele21, ele31,ele41;
var gameOver = false;
const winMessage = document.getElementById('win');

const btnReset = document.getElementById("btn");
btnReset.addEventListener('click', resetGame)

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
    checkDiagonal();
  }
  else if (currentTurn === 'Yellow' && (newTdElement.classList.contains("red") || newTdElement.classList.contains("yellow") || event.target.id.slice(0, 1) === '5')) {
    event.target.classList.add('yellow');
    event.target.removeEventListener('click', jetonTurn);
    currentTurn = 'Red';
    checkRow();
    checkColumn();
    checkDiagonal();
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

      if (redRow === 4) {
        winMessage.innerText = "Player Red Wins!";
        winMessage.style.color = 'red';
        gameOver = true;
      }
      if (yellowRow === 4) {
        winMessage.innerText = "Player Yellow Wins!";
        winMessage.style.color = 'yellow';
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

      if (redColumn === 4) {
        winMessage.innerText = "Player Red Wins!";
        winMessage.style.color = 'red';
        gameOver = true;
      }
      if (yellowColumn === 4) {
        winMessage.innerText = "Player Yellow Wins!";
        winMessage.style.color = 'yellow';
        gameOver = true;
      }


    }

  }

}

function checkDiagonal() {
  const tds = document.querySelectorAll('td');
  
  for (i = 0; i < nRows; i++) {

    for (j = 0; j < nColumns; j++) {
      tds.forEach(function (element) {
        if (element.id === `${i}${j}`)
          ele1 = element
        if (element.id === `${i - 1}${j + 1}`)
          ele2 = element;
         if (element.id === `${i - 1}${j - 1}`)
          ele21 = element;
        if (element.id === `${i - 2}${j + 2}`)
          ele3 = element;
         if (element.id === `${i - 2}${j - 2}`)
          ele31 = element;
        if (element.id === `${i - 3}${j + 3}`)
          ele4 = element;
         if (element.id === `${i - 3}${j - 3}`)
        ele41 = element;
      }

      )

      if (ele1.classList.contains('red') && ele2.classList.contains('red') && ele3.classList.contains('red') && ele4.classList.contains('red')) {
        winMessage.innerText = "Player Red Wins!";
        winMessage.style.color = 'red';
        gameOver = true;
      }
      else if (ele1.classList.contains('yellow') && ele2.classList.contains('yellow') && ele3.classList.contains('yellow') && ele4.classList.contains('yellow')) {
        winMessage.innerText = "Player Yellow Wins!";
        winMessage.style.color = 'yellow';
        gameOver = true;
      }

      if (ele1.classList.contains('red') && ele21.classList.contains('red') && ele31.classList.contains('red') && ele41.classList.contains('red')) {
        winMessage.innerText = "Player Red Wins!";
        winMessage.style.color = 'red';
        gameOver = true;
      }
      else if (ele1.classList.contains('yellow') && ele21.classList.contains('yellow') && ele31.classList.contains('yellow') && ele41.classList.contains('yellow')) {
        winMessage.innerText = "Player Yellow Wins!";
        winMessage.style.color = 'yellow';
        gameOver = true;
      }
    }
  }
}


function resetGame() {
  const tds = document.querySelectorAll("td");
  tds.forEach(function (element) {
    element.classList.remove('yellow');
    element.classList.remove('red');
  });
  currentTurn = prompt('Player 1, choose Yellow or Red:');
  gameOver = false;
  winMessage.innerText = "";
  redColumn = 0;
  yellowColumn = 0;
  redRow = 0;
  yellowRow = 0;
  ele1, ele2, ele3, ele4, ele21, ele31, ele41 = null;
  mainGame();
}

generateTable(nRows, nColumns);
mainGame();
