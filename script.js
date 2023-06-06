alert("Bienvenue à Puissance 4 le jeu!")
var currentTurn = prompt('Player 1, choose Yellow or Red:');
var table;
var divGame;
const nRows = 6;
const nColumns = 7;

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
  const td = document.querySelectorAll("td");

    td.forEach(function (element) {

      element.addEventListener('click', jetonTurn);


    });
  }

function jetonTurn(event)
{
  var id = event.target.id;
  var rowNumber = id.slice(0, 1);
  rowNumber = parseInt(rowNumber);
  rowNumber += 1;
  if (rowNumber === 6) rowNumber = 5;
  const columnNumber = id.slice(1, 2);
  const newId = `${rowNumber}${columnNumber}`;
  const newTdElement = document.getElementById(newId);
  

  if (currentTurn === 'Red' && (newTdElement.classList.contains("red") || newTdElement.classList.contains("yellow") || event.target.id.slice(0, 1) === '5'))
        {
          event.target.classList.add('red');
          event.target.innerText = "";
          event.target.removeEventListener('click', jetonTurn);
          currentTurn = 'Yellow';
        }
        else if (currentTurn === 'Yellow' && (newTdElement.classList.contains("red") || newTdElement.classList.contains("yellow") || event.target.id.slice(0, 1) === '5'))
        {
          event.target.classList.add('yellow');
          event.target.removeEventListener('click', jetonTurn);
          currentTurn = 'Red';
        }

        
}

function calculateResult()
{
  var td = document.querySelectorAll('td');
  var filterRed = td.filter( element => element.classList.contains('red'));
  for (var i = 0; i < nRows; i++)
  {
  }

}

const btn = document.getElementById("btn");
btn.addEventListener('click', function()
{
  const tds = document.querySelectorAll("td");
  tds.forEach(function(element){
    element.classList.remove('yellow');
    element.classList.remove('red');
  });
  currentTurn = prompt('Player 1, choose Yellow or Red:');
  mainGame();

});
generateTable(nRows, nColumns);
mainGame();
