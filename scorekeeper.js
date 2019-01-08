var playOne = document.querySelector("#btnOne");
var playTwo = document.querySelector("#btnTwo");
var reset = document.querySelector("#btnThree");
var playOneNum = document.querySelector("#player1");
var playTwoNum = document.querySelector("#player2");
var numInput = document.querySelector("#number");
var playTo = document.querySelector("#playTo");
var playOneScore = 0;
var playTwoScore = 0;
var gameOver = false;
var winScore = 5;

playOne.addEventListener("click", function() {
    if(!gameOver) {
        playOneScore++;
        if(playOneScore === winScore) {
            playOneNum.classList.add("winner");
            gameOver = true;
        }
        playOneNum.textContent = playOneScore;
    }
})

playTwo.addEventListener("click", function() {
    if(!gameOver) {
        playTwoScore++;
        if(playTwoScore === winScore) {
            playTwoNum.classList.add("winner");
            gameOver = true;
        }
        playTwoNum.textContent = playTwoScore;
    }
})

function resetFunc() {
    playOneScore = 0;
    playOneNum.textContent = playOneScore;
    playTwoScore = 0;
    playTwoNum.textContent = playTwoScore;
    playOneNum.classList.remove("winner");
    playTwoNum.classList.remove("winner");
    gameOver = false;
};

reset.addEventListener("click", function() {
    resetFunc();
});

numInput.addEventListener("change", function() {
    playTo.textContent = numInput.value;
    winScore = Number(this.value);
    resetFunc();
});

function testFunc() {
    alert("This function works!");
};