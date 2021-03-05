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
let playerMove = getMoveName(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'));

displayResult(computerMove, playerMove);