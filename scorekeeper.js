var playOne = document.querySelector("#btnOne");
var playTwo = document.querySelector("#btnTwo");
var reset = document.querySelector("#btnThree");
var playOneNum = document.querySelector("#player1");
var playTwoNum = document.querySelector("#player2");
var playOneScore = 0;
var playTwoScore = 0;
var gameOver = false;
var winScore = 5;

playOne.addEventListener("click", function() {
    if(!gameOver) {
        playOneScore++;
        if(playOneScore === winScore) {
            gameOver = true;
        }
        playOneNum.textContent = playOneScore;
    }
})

playTwo.addEventListener("click", function() {
    if(!gameOver) {
        playTwoScore++;
        if(playTwoScore === winScore) {
            gameOver = true;
        }
        playTwoNum.textContent = playTwoScore;
    }
})