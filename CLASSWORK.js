var gameSpaces = document.querySelectorAll('td');
var current_player = 1;
var reset = document.querySelector('button');
//Playing the game
function clickedSquare (e) {
    if (current_player === 1 && e.target.innerHTML === ""){
        e.target.innerHTML = "X";
        current_player += 1;
    }
    else if (e.target.innerHTML === ""){
        e.target.innerHTML = "O";
        current_player -=1;
    }
    // Checking for cat
    Cat();
    //Checking for winner
    winner();

}

for (var i = 0; i < gameSpaces.length; i++) {
    gameSpaces[i].addEventListener('click', clickedSquare);
}
function Cat(){
    if ((gameSpaces[0].innerText === "X" || gameSpaces[0] === "O") &&
        (gameSpaces[1].innerText === "X" || gameSpaces[1].innerText === "O") &&
        (gameSpaces[2].innerText === "X" || gameSpaces[2].innerText === "O") &&
        (gameSpaces[3].innerText === "X" || gameSpaces[3].innerText === "O") &&
        (gameSpaces[4].innerText === "X" || gameSpaces[4].innerText === "O") &&
        (gameSpaces[5].innerText === "X" || gameSpaces[5].innerText === "O") &&
        (gameSpaces[6].innerText === "X" || gameSpaces[6].innerText === "O") &&
        (gameSpaces[7].innerText === "X" || gameSpaces[7].innerText === "O") &&
        (gameSpaces[8].innerText === "X" || gameSpaces[8].innerText === "O")){
        alert("CAT!!!!");
    }
    else{
        console.log("No Cats Here!!");
    }

}
//Resetting the board
reset.onclick = function () {
    console.log("Hey");
    gameSpaces[0].innerHTML = "";
    gameSpaces[1].innerHTML = "";
    gameSpaces[2].innerHTML = "";
    gameSpaces[3].innerHTML = "";
    gameSpaces[4].innerHTML = "";
    gameSpaces[5].innerHTML = "";
    gameSpaces[6].innerHTML = "";
    gameSpaces[7].innerHTML = "";
    gameSpaces[8].innerHTML = "";
    current_player = 1;
};

function winner() {
    if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="X")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="X")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="X")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="X"))
    {
        alert("X wins");
        return false;
    }
    else if((gameSpaces[0].innerText=== gameSpaces[1].innerText &&gameSpaces[1].innerText === gameSpaces[2].innerText && gameSpaces[2].innerText==="O")
        ||(gameSpaces[3].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[5].innerText && gameSpaces[5].innerText==="O")
        ||(gameSpaces[6].innerText=== gameSpaces[7].innerText &&gameSpaces[7].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[3].innerText &&gameSpaces[3].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O")
        ||(gameSpaces[1].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[7].innerText && gameSpaces[7].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[5].innerText &&gameSpaces[5].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[0].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[8].innerText && gameSpaces[8].innerText==="O")
        ||(gameSpaces[2].innerText=== gameSpaces[4].innerText &&gameSpaces[4].innerText === gameSpaces[6].innerText && gameSpaces[6].innerText==="O"))
    {
        alert("O wins");
        return false;
    }


}
