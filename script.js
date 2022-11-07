const canvas = document.getElementById('CanvasNewGame');
const roleButton =document.getElementById('rollButton');
const holdButton =document.getElementById('holdButton');
const interTextP1 = document.getElementById('interScorePlayer1')
const interTextP2 = document.getElementById('interScorePlayer2')
const scoreP1 = document.getElementById('scorePlayer1')
const scoreP2 = document.getElementById('scorePlayer2')
let ctx;
let res=0;
let resinter=0;
let holdPress=false;
let count = 0;
interTextP1.value = 0;
interTextP2.value = 0;
scoreP1.value=0;
scoreP2.value=0;

roleButton.addEventListener("click", rollDice)
holdButton.addEventListener("click", hold)

if (canvas.getContext) {
    ctx = canvas.getContext('2d') ;
    ctx.beginPath();
    ctx.strokeStyle= 'red';
    ctx.moveTo(25  , 10);
    ctx.lineTo(25, 40);
    ctx.moveTo(10,25);
    ctx.lineTo(40,25);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(25,25,24,0,Math.PI*2 );
    ctx.stroke();
}
else {
    // code pour les anciens navigateurs}
}

const p1=document.getElementById('P1');
const p2=document.getElementById('P2');

let player=1, n;
initpoints()
playerpoint()

function rollDice(){
    count =0;
    animationRoll(count);
    holdPress = true;
    let diceResult = Math.floor(Math.random() * 6)+1;
    if (diceResult == 1){
        changePlayer(diceResult)
    } else {
        intermediateScore(player, diceResult)
    }
    displayDice(diceResult)
}

function displayDice(diceResult) {
    const dice = document.getElementById('dice');
    console.log(diceResult);
    if (dice.getContext) {
        ctx = dice.getContext('2d');
        ctx.clearRect(0, 0, dice.width, dice.height);
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 50, 50);
        ctx.fillStyle = "black";
        ctx.strokeRect(0, 0, 50, 50);
        ctx.closePath();

        switch (diceResult) {

            case 1:
                ctx.beginPath();
                ctx.arc(25, 25, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                break;

            case 2:
                ctx.beginPath();

                ctx.arc(10, 10, 5, 0, Math.PI * 2);
                ctx.moveTo(40, 40);
                ctx.arc(40, 40, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                break;

            case 3:
                ctx.beginPath();
                ctx.arc(10, 10, 5, 0, Math.PI * 2);
                ctx.moveTo(25, 25);
                ctx.arc(25, 25, 5, 0, Math.PI * 2);
                ctx.moveTo(40, 40);
                ctx.arc(40, 40, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                break;

            case 4:
                ctx.beginPath();
                ctx.arc(10, 10, 5, 0, Math.PI * 2);
                ctx.moveTo(10, 40);
                ctx.arc(10, 40, 5, 0, Math.PI * 2);
                ctx.moveTo(40, 40);
                ctx.arc(40, 40, 5, 0, Math.PI * 2);
                ctx.moveTo(40, 10);
                ctx.arc(40, 10, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                break;

            case 5:
                ctx.beginPath();
                ctx.arc(10, 10, 5, 0, Math.PI * 2);
                ctx.moveTo(10, 40);
                ctx.arc(10, 40, 5, 0, Math.PI * 2);
                ctx.moveTo(40, 10);
                ctx.arc(40, 10, 5, 0, Math.PI * 2);
                ctx.moveTo(40, 40);
                ctx.arc(40, 40, 5, 0, Math.PI * 2);
                ctx.moveTo(25, 25);
                ctx.arc(25, 25, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                break;

            case 6:
                ctx.beginPath();
                ctx.arc(10, 10, 5, 0, Math.PI * 2);
                ctx.moveTo(10, 25);
                ctx.arc(10, 25, 5, 0, Math.PI * 2);
                ctx.moveTo(10, 40);
                ctx.arc(10, 40, 5, 0, Math.PI * 2);
                ctx.moveTo(40, 10);
                ctx.arc(40, 10, 5, 0, Math.PI * 2);
                ctx.moveTo(40, 25);
                ctx.arc(40, 25, 5, 0, Math.PI * 2);
                ctx.moveTo(40, 40);
                ctx.arc(40, 40, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.closePath();
                break;
        }
        }
    else
        {
            // code pour les anciens navigateurs}
        }
}

function hold(){
    if (holdPress) {
        changePlayer()
    }
    holdPress=false;
}

function intermediateScore(player, diceResult){
    res= res + diceResult
    if (player == 1){
        interTextP1.innerHTML = res
    }else{
        interTextP2.innerHTML = res
    }
}

function changePlayer(diceResult){
    if (player == 1){
        if (diceResult != 1) {
            resinter = parseInt(interTextP1.innerHTML) + parseInt(scoreP1.innerHTML)
            scoreP1.innerHTML = resinter
            if (scoreP1.innerHTML >= 100){
                setTimeout(win(1), 3000);
            }
        }
        player = 2;
    }else{
        if (diceResult != 1) {
            resinter = parseInt(interTextP2.innerHTML) + parseInt(scoreP2.innerHTML)
            scoreP2.innerHTML = resinter
            if (scoreP2.innerHTML >= 100){
                setTimeout(win(2), 3000);

            }

        }
        player = 1;
    }
    playerpoint();
    holdPress = false;
    res=0;
    resinter=0;
    interTextP1.innerHTML = 0;
    interTextP2.innerHTML = 0;
}

function initpoints(){

    ctx = p1.getContext('2d') ;
    ctx.beginPath();
    ctx.fillStyle="red"
    ctx.arc(10,10,7,0,Math.PI*2);
    ctx.fill();

    ctx = p2.getContext('2d') ;
    ctx.beginPath();
    ctx.fillStyle="red"
    ctx.arc(10,10,7,0,Math.PI*2);
    ctx.fill();
}

function playerpoint(){
    if (player == 1){
        p2.style.display='none'
        p1.style.display= 'inline'
    }else{
        p1.style.display='none'
        p2.style.display= 'inline'
    }
}

function reset(){
    interTextP1.innerHTML = 0;
    interTextP2.innerHTML = 0;
    scoreP1.innerHTML = 0;
    scoreP2.innerHTML = 0;
    if (player == 2){
        changePlayer()
    }
}

function win(player){
    window.alert('Player ' + player + ' WIN !!!')
    reset()
}

function animationRoll(count){
    if (count < 10){
        n = Math.floor(Math.random() * 6) + 1;
        console.log(n)
        displayDice(n);
        setTimeout('animationRoll()',1000);
        count++;
    }
    /*
    let n =1
    setTimeout(() => {
        displayDice(n)
    }, 1000);
    for (let i=0;10;i++) {
        n = Math.floor(Math.random() * 6) + 1;
        console.log(n)
        setTimeout(() => {
            displayDice(n)
        }, 1000);
    }
    */
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
const IntermediateScoreP1 =document.getElementById('interScorePlayer1')
const IntermediateScoreP2 =document.getElementById('interScorePlayer2')