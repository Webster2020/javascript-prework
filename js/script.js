function playGame(playerChoice) {
  //clear messages
  clearMessages();
  //player move
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  //computer move
  function displayResult(argComputerMove, argPlayerMove) {
    if (argPlayerMove == 'nieznany ruch') {
      printMessage('Wprowadzona liczba inna niż 1,2,3. Wprowadź poprawną liczbę!');
    } else {
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce' || argPlayerMove == 'papier' && argComputerMove == 'kamień' || argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz rundę!');
      } else {
        printMessage('Komputer był lepszy!');
      }
    }
  }
  let computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
  //let playerMove = getMoveName(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'));
  let playerMove = getMoveName(playerChoice);

  displayResult(computerMove, playerMove);
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