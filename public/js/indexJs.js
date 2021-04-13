const buttonStart = document.querySelector('#btn-start');
const containerMain = document.getElementById('c-main');
const containerGameBoard = document.getElementById('c-game-board');

const markerOne = document.querySelector('.marker-one');
const markerTwo = document.querySelector('.marker-two');
const markerText = document.querySelector('.text');

const playerTwo = document.querySelector('#player-two');
const boardTwo = document.querySelector('.board-two');

const btnRock = document.getElementById('btn-rock');
const btnPaper = document.getElementById('btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

var pointsOne = 0;
var pointsTwo = 0;

function playGame(hand) {

    btnPaper.style.pointerEvents = 'none';
    btnRock.style.pointerEvents = 'none';
    btnScissors.style.pointerEvents = 'none';
    
    boardTwo.className += ' hand-two';

    setTimeout(() => {
        let i = Math.floor(Math.random() * (4 - 1) + 1);

        switch(i){
            case 1:
                playerTwo.src = '/img/P_1.png';
                break;
            case 2:
                playerTwo.src = '/img/S_1.png';
                break;
            case 3:
                playerTwo.src = '/img/R_1.png';
                break;
        }

        console.log("compu es", i," mano es", hand);

        if (hand == i){
            markerText.innerHTML = "Game Tie";
            markerText.className += " tie";
        }else if(hand == 1 && i == 2){
            pointsTwo = pointsTwo + 1;
            markerText.innerHTML = "Player 2 Wins";
            markerText.className += " winer-2";
        }else if(hand == 1 && i == 3){
            pointsOne = pointsOne + 1;
            markerText.innerHTML = "Player 1 Wins";
            markerText.className += " winer-1";
        }else if(hand == 2 && i == 3){
            pointsTwo = pointsTwo + 1;
            markerText.innerHTML = "Player 2 Wins";
            markerText.className += " winer-2";
        }else if(hand == 2 && i == 1){
            pointsOne = pointsOne + 1;
            markerText.innerHTML = "Player 1 Wins";
            markerText.className += " winer-1";
        }else if(hand == 3 && i == 2){
            pointsOne = pointsOne + 1;
            markerText.innerHTML = "Player 1 Wins";
            markerText.className += " winer-1";
        }else if(hand == 3 && i == 1){
            pointsTwo = pointsTwo + 1;
            markerText.innerHTML = "Player 2 Wins";
            markerText.className += " winer-2";
        }

        markerOne.innerHTML = pointsOne;
        markerTwo.innerHTML = pointsTwo;
    }, 1000);

    setTimeout(() => {
        markerText.innerHTML = ' ';
        markerText.className = 'text';
        boardTwo.className = 'board-two'
        btnPaper.style.pointerEvents = 'auto';
        btnRock.style.pointerEvents = 'auto';
        btnScissors.style.pointerEvents = 'auto';
    }, 2000);

}

buttonStart.addEventListener('click', () => {
    containerMain.style.display = 'none';
    containerGameBoard.style.display = 'grid';
});

btnRock.addEventListener('click', () => {
    playGame(3);
    // console.log("push rock");
});

btnPaper.addEventListener('click', () => {
    playGame(1);
    // console.log("push Paper");
});

btnScissors.addEventListener('click', () => {
    playGame(2);
    // console.log("push Scissors");
});