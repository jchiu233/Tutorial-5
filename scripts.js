let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

// initialize the game by setting the value inside next-lbl to nextPlayer
document.getElementById('next-lbl').innerText = nextPlayer;

// This call will create the buttons needed for the gameboard.
createGameBoard();

function createGameBoard() {
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 1; i <= 9; i++) {
        let cell = document.getElementById("c" + i);
        let btn = document.createElement("button");
        btn.innerText = "[ ]";
        cell.appendChild(btn);
    }

    // Programatically add 'takeCell' as an event listener to all the buttons on the board
    let btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++) {
        /*
            Assign an event listener to each of the buttons in btns.
            The event to listen for should be 'click'.
        */
        btns[i].addEventListener("click", takeCell);
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event) {
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in nextPlayer before switching it
    */
    let button = event.target;
    button.innerText = "[" + nextPlayer + "]";
    button.disabled = true; // Make sure the button is clickable only once

    // Switch to the next player
    nextPlayer = (nextPlayer === 'X') ? 'O' : 'X';

    // Update the next-lbl display
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Check if the game is over
    if (isGameOver()) {
        // let the label with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById('game-over-lbl').innerHTML = "<h1>Game Over</h1>";
    }
}

// This function returns true if all the buttons are disabled and false otherwise 
function isGameOver() {
    let btns = document.querySelectorAll('button');
    for (let i = 0; i < btns.length; i++) {
        if (!btns[i].disabled) {
            return false;
        }
    }
    return true;
}
