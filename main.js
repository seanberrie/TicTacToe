console.log("hold my beer");
var reset = document.querySelector('.reset')
var grid = document.querySelector('.grid');
var numberOfPlayers = 2;
var currentPlayer = 0;
var gameState = {};
var gameOver = false;
var winComb = [0,1,2], [3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8];
var usedSquares = [];

grid.addEventListener('click', function(evt){
    debugger
    if (currentPlayer === 0){
        document.getElementsByClassName("x").style.display ="flex", currentPlayer++,
/////build check function to check wincomb with squares used
/////also with alert if the winComb is met to show winner alert
    }
        if else (currentPlayer === 1){
            document.getElementsByClassName('o').style.display ="flex",
            currentPlayer--}
/////build check function to check wincomb with squares used
/////also with alert if the winComb is met to show winner alert
            else ///////if no winComb met when all squares are used alert tie

            



    var cell = evt.target.classList[0]
    console.log(evt.target);
});


reset.addEventListener('click', function(rst){
    document.location.href("");
})


/////if current player show x then switch current player to 1 and make player to o
/////need reset button to clear board
/////need if then if box 123 456 789 159 357 147 258 369 is completed then win
/////need alert that says win if above is ment or else tie
/////need function that makes current players image visible
/////make function that says if undefined then it can be clicked if has a value then it is disabled