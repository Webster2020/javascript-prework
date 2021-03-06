let winner = '';
let resultPlayer = 0;
let resultComputer = 0;

function playGame(playerChoice) {
  //clear messages
  clearMessages('messages');
  //player move
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.', 'messages');
      return 'nieznany ruch';
    }
  }
  //computer move and display results of single round
  function displayResult(argComputerMove, argPlayerMove) {
    if (argPlayerMove == 'nieznany ruch') {
      printMessage('Wprowadzona liczba inna niż 1,2,3. Wprowadź poprawną liczbę!', 'messages');
    } else {
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove, 'messages');
      if (argPlayerMove == argComputerMove) {
        printMessage('Remis!', 'messages');
        winner = 'Draw';
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce' || argPlayerMove == 'papier' && argComputerMove == 'kamień' || argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz rundę!', 'messages');
        winner = 'Player';
      } else {
        printMessage('Komputer był lepszy!', 'messages');
        winner = 'Computer';
      }
    }
  }
  //display result of all games
  function displayRoundResult(roundWinner) {
    if (roundWinner == 'Player') {
      resultPlayer++;
    } else if (roundWinner == 'Computer') {
      resultComputer++;
    } else {
      console.log('Draw!');
    }
    clearMessages('resultPlayer');
    clearMessages('resultComputer');

    printMessage(resultPlayer, 'resultPlayer');
    printMessage(resultComputer, 'resultComputer');
  }

  let computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
  let playerMove = getMoveName(playerChoice);

  displayResult(computerMove, playerMove);

  displayRoundResult(winner);

}

function playAgain() {
  resultPlayer = 0;
  resultComputer = 0;

  clearMessages('resultPlayer');
  clearMessages('resultComputer');

  printMessage(resultPlayer, 'resultPlayer');
  printMessage(resultComputer, 'resultComputer');
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});

document.getElementById('play-again').addEventListener('click', function () {
  playAgain();
});