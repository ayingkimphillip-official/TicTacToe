var boardSlots;
var isPlayerOne = false;
var isPlayerTwo = false;
var player;

var btnStartGame;
var btnResetGame;


document.onreadystatechange = function() {
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
    player = document.querySelector("#player-container input");
    player.value = "";
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
    isPlayerOne = true;
    isPlayerTwo = false;
    btnStartGame.disabled = true;
    player.value = "Turn of: Player 1";
}

function resetGame(){
    for (var i = 0; i < boardSlots.length; i++) {
        boardSlots[i].disabled = true;
        boardSlots[i].innerText = "";
        isPlayerOne = true;
        isPlayerTwo = false;
    }
    btnStartGame.disabled = false;
    player.value = "";
}

function putAnswer(e) {
    if (isPlayerOne == true) {
        e.target.innerText = "X";
        e.target.disabled = true;
        isPlayerOne = false;
        isPlayerTwo = true;
        player.value = "Turn of: Player 2";
    }
    else {
        e.target.innerText = "O";
        e.target.disabled = true;
        isPlayerOne = true;
        isPlayerTwo = false;
        player.value = "Turn of: Player 1";
    }
    declareWinner();
}

function declareWinner() {
    for (var i = 0; i < boardSlots.length; i++) {
        if (boardSlots[0].innerText == "X" && boardSlots[1].innerText == "X" && boardSlots[2].innerText == "X") {
            alert("Player 1 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[0].innerText == "X" && boardSlots[3].innerText == "X" && boardSlots[6].innerText == "X") {
            alert("Player 1 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[0].innerText == "X" && boardSlots[4].innerText == "X" && boardSlots[8].innerText == "X") {
            alert("Player 1 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[1].innerText == "X" && boardSlots[4].innerText == "X" && boardSlots[7].innerText == "X") {
            alert("Player 1 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[2].innerText == "X" && boardSlots[5].innerText == "X" && boardSlots[8].innerText == "X") {
            alert("Player 1 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[3].innerText == "X" && boardSlots[4].innerText == "X" && boardSlots[5].innerText == "X") {
            alert("Player 1 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[6].innerText == "X" && boardSlots[7].innerText == "X" && boardSlots[8].innerText == "X") {
            alert("Player 1 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[2].innerText == "X" && boardSlots[4].innerText == "X" && boardSlots[6].innerText == "X") {
            alert("Player 1 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[0].innerText == "O" && boardSlots[1].innerText == "O" && boardSlots[2].innerText == "O") {
            alert("Player 2 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[0].innerText == "O" && boardSlots[3].innerText == "O" && boardSlots[6].innerText == "O") {
            alert("Player 2 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[0].innerText == "O" && boardSlots[4].innerText == "O" && boardSlots[8].innerText == "O") {
            alert("Player 2 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[1].innerText == "O" && boardSlots[4].innerText == "O" && boardSlots[7].innerText == "O") {
            alert("Player 2 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[2].innerText == "O" && boardSlots[5].innerText == "O" && boardSlots[8].innerText == "O") {
            alert("Player 2 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[3].innerText == "O" && boardSlots[4].innerText == "O" && boardSlots[5].innerText == "O") {
            alert("Player 2 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[6].innerText == "O" && boardSlots[7].innerText == "O" && boardSlots[8].innerText == "O") {
            alert("Player 2 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
        else if (boardSlots[2].innerText == "O" && boardSlots[4].innerText == "O" && boardSlots[6].innerText == "O") {
            alert("Player 2 WINS!");
            for(var j = 0; j < boardSlots.length; j++) {
                boardSlots[j].disabled = true;
            }
        }
    }
}