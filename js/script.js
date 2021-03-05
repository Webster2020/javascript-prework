let computerChoice = Math.floor(Math.random() * 3 + 1);

let computerMove = '';

if (computerChoice == '1') {
  computerMove = 'kamień';
} else if (computerChoice == '2') {
  computerMove = 'papier';
} else if (computerChoice == '3') {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = '';

if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
} else {
  playerMove = 'nieznany ruch';
}

let winner = '';

if (playerInput == '1' && computerChoice == '1' || playerInput == '2' && computerChoice == '2' || playerInput == '3' && computerChoice == '3') {
  winner = 'Remis!';
} else if (playerInput == '1' && computerChoice == '3' || playerInput == '2' && computerChoice == '1' || playerInput == '3' && computerChoice == '2') {
  winner = 'Wygrywasz rundę!';
} else {
  winner = 'Komputer był lepszy!';
}

console.log('Twój ruch to: ' + playerMove);
console.log('Komputer wybrał: ' + computerMove);
console.log(`Komputer wybrał ${computerMove}, Ty wybrałeś ${playerMove}. ${winner}`);

printMessage('Twój ruch to: ' + playerMove);
