var boardSlots;
var boardSlotsChecker;
var isPlayerOne = false;
var isPlayerTwo = false;
var player;
var playerContainer;
var winner;
var winnerContainer;

var btnStartGame;
var btnResetGame;


document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        initializeGame();
        attachEventHandlers();
    }
}

function initializeGame() {
    boardSlots = document.querySelectorAll("#gameboard button");
    for (var i = 0; i < boardSlots.length; i++) {
        boardSlots[i].disabled = true;
    }
    btnStartGame = document.querySelector("#btnStartGame");
    btnResetGame = document.querySelector("#btnResetGame");
    playerContainer = document.querySelector("#player-container");
    player = document.querySelector("#player-container input");
    winnerContainer = document.querySelector("#game-winner");
    winner = document.querySelector("#game-winner label");
    player.value = "";
    playerContainer.hidden = true;
    winnerContainer.hidden = true;
    boardSlotsChecker = boardSlots;
}

function attachEventHandlers() {
    btnStartGame.onclick = enableButtons;
    btnResetGame.onclick = resetGame;
    for (var i = 0; i < boardSlots.length; i++) {
        boardSlots[i].onclick = putAnswer;
    }
}

function enableButtons() {
    for (var i = 0; i < boardSlots.length; i++) {
        boardSlots[i].disabled = false;
    }
    playerContainer.hidden = false;
    isPlayerOne = true;
    isPlayerTwo = false;
    btnStartGame.disabled = true;
    player.classList.add("player1");
    player.value = "Turn of: Player 1";
}

function resetGame() {
    for (var i = 0; i < boardSlots.length; i++) {
        boardSlots[i].disabled = true;
        boardSlots[i].innerText = "";
        boardSlots[i].classList.remove("player1", "player2");
        isPlayerOne = true;
        isPlayerTwo = false;
    }
    btnStartGame.disabled = false;
    playerContainer.hidden = true;
    player.classList.remove("player1", "player2");
    player.value = "";
    winner.classList.remove("player1", "player2");
    winnerContainer.hidden = true;
}

function putAnswer(e) {
    if (isPlayerOne == true) {
        e.target.innerText = "X";
        e.target.disabled = true;
        e.target.classList.add("player1");
        isPlayerOne = false;
        isPlayerTwo = true;
        player.classList.remove("player1");
        player.classList.add("player2");
        player.value = "Turn of: Player 2";
    }
    else {
        e.target.innerText = "O";
        e.target.disabled = true;
        e.target.classList.add("player2");
        isPlayerOne = true;
        isPlayerTwo = false;
        player.classList.remove("player2");
        player.classList.add("player1");
        player.value = "Turn of: Player 1";
    }
    checkBoardSlots();
}

function checkBoardSlots() {
    var disabledSlotCounter = 0;
    for (var i = 0; i < boardSlotsChecker.length; i++) {
        if (boardSlotsChecker[i].disabled == true) {
            disabledSlotCounter++;
            conditionsToWin();
        }
        if (disabledSlotCounter == 9) {
            player.classList.remove("player1", "player2");
            player.classList.add("noWinner");
            player.value = "No Winner.";
        }
    }
}

function declareWinner(winningPlayer) {
    if (winningPlayer == 1) {
        // alert("Player 1 WINS!");
        playerContainer.hidden = true;
        winnerContainer.hidden = false;
        winner.classList.add("player1");
        winner.innerText = "The Winner is: Player 1!";
        player.value = "";
    }
    else {
        // alert("Player 2 WINS!");
        playerContainer.hidden = true;
        winnerContainer.hidden = false;
        winner.classList.add("player2");
        winner.innerText = "The Winner is: Player 2!";
        player.value = "";
    }
    for (var i = 0; i < boardSlots.length; i++) {
        boardSlots[i].disabled = true;
    }
}

function conditionsToWin() {
    var winningPlayer;
    for (var i = 0; i < boardSlots.length; i++) {
        if (boardSlots[0].innerText == "X" && boardSlots[1].innerText == "X" && boardSlots[2].innerText == "X") {
            winningPlayer = 1;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[0].innerText == "X" && boardSlots[3].innerText == "X" && boardSlots[6].innerText == "X") {
            winningPlayer = 1;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[0].innerText == "X" && boardSlots[4].innerText == "X" && boardSlots[8].innerText == "X") {
            winningPlayer = 1;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[1].innerText == "X" && boardSlots[4].innerText == "X" && boardSlots[7].innerText == "X") {
            winningPlayer = 1;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[2].innerText == "X" && boardSlots[5].innerText == "X" && boardSlots[8].innerText == "X") {
            winningPlayer = 1;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[3].innerText == "X" && boardSlots[4].innerText == "X" && boardSlots[5].innerText == "X") {
            winningPlayer = 1;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[6].innerText == "X" && boardSlots[7].innerText == "X" && boardSlots[8].innerText == "X") {
            winningPlayer = 1;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[2].innerText == "X" && boardSlots[4].innerText == "X" && boardSlots[6].innerText == "X") {
            winningPlayer = 1;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[0].innerText == "O" && boardSlots[1].innerText == "O" && boardSlots[2].innerText == "O") {
            winningPlayer = 2;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[0].innerText == "O" && boardSlots[3].innerText == "O" && boardSlots[6].innerText == "O") {
            winningPlayer = 2;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[0].innerText == "O" && boardSlots[4].innerText == "O" && boardSlots[8].innerText == "O") {
            winningPlayer = 2;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[1].innerText == "O" && boardSlots[4].innerText == "O" && boardSlots[7].innerText == "O") {
            winningPlayer = 2;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[2].innerText == "O" && boardSlots[5].innerText == "O" && boardSlots[8].innerText == "O") {
            winningPlayer = 2;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[3].innerText == "O" && boardSlots[4].innerText == "O" && boardSlots[5].innerText == "O") {
            winningPlayer = 2;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[6].innerText == "O" && boardSlots[7].innerText == "O" && boardSlots[8].innerText == "O") {
            winningPlayer = 2;
            declareWinner(winningPlayer);
        }
        else if (boardSlots[2].innerText == "O" && boardSlots[4].innerText == "O" && boardSlots[6].innerText == "O") {
            winningPlayer = 2;
            declareWinner(winningPlayer);
        }
    }
}