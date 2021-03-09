{
  let winner = "";
  let resultPlayer = 0;
  let resultComputer = 0;

  const playGame = function (playerChoice) {
    //clear messages
    clearMessages("messages");
    //player move
    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      } else {
        printMessage("Nie znam ruchu o id " + argMoveId + ".", "messages");
        return "nieznany ruch";
      }
    };
    //computer move and display results of single round
    const displayResult = function (argComputerMove, argPlayerMove) {
      if (argPlayerMove == "nieznany ruch") {
        printMessage(
          "Wprowadzona liczba inna niż 1,2,3. Wprowadź poprawną liczbę!",
          "messages"
        );
      } else {
        printMessage(
          "Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove,
          "messages"
        );
        if (argPlayerMove == argComputerMove) {
          printMessage("Remis!", "messages");
          winner = "Draw";
        } else if (
          (argPlayerMove == "kamień" && argComputerMove == "nożyce") ||
          (argPlayerMove == "papier" && argComputerMove == "kamień") ||
          (argPlayerMove == "nożyce" && argComputerMove == "papier")
        ) {
          printMessage("Wygrywasz rundę!", "messages");
          winner = "Player";
        } else {
          printMessage("Komputer był lepszy!", "messages");
          winner = "Computer";
        }
      }
    };
    //display result of all games
    const displayRoundResult = function (roundWinner) {
      if (roundWinner == "Player") {
        resultPlayer++;
      } else if (roundWinner == "Computer") {
        resultComputer++;
      } else {
        console.log("Draw!");
      }
      clearMessages("resultPlayer");
      clearMessages("resultComputer");

      printMessage(resultPlayer, "resultPlayer");
      printMessage(resultComputer, "resultComputer");
    };

    const computerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
    const playerMove = getMoveName(playerChoice);

    displayResult(computerMove, playerMove);

    displayRoundResult(winner);
  };

  const playAgain = function () {
    resultPlayer = 0;
    resultComputer = 0;

    clearMessages("messages");
    clearMessages("resultPlayer");
    clearMessages("resultComputer");

    printMessage(resultPlayer, "resultPlayer");
    printMessage(resultComputer, "resultComputer");
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });
  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });
  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });

  document.getElementById("play-again").addEventListener("click", function () {
    playAgain();
  });
}
