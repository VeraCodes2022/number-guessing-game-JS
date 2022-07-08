'use strict';
let score=20;
let highscore=0;
let secretNumber=Math.trunc((Math.random()*20)+1);

const body=document.querySelector('body');
const againbtn=document.querySelector('.again');
const number=document.querySelector('.number');
const check=document.querySelector('.check');

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}
// click check button to check if the guessing number is correct.
check.addEventListener('click', ()=>{
const guess = Number(document.querySelector('.guess').value);
console.log(guess, secretNumber)
if(guess==''){
    displayMessage('⛔️ No number!');
}else if(!(1 <= guess && guess <= 20)){
    displayMessage('😊 Please Guess a Number between 1 and 20!');
}else if(guess === secretNumber){
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent=secretNumber;
    body.style.backgroundColor = '#60b347';

    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;   
    }
}else if(guess !== secretNumber){
    score--;
    document.querySelector('.score').textContent=score;
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    if(score=== highscore){
        displayMessage('💥 You lost the game!');
    }
}


});


//click again button to initialize the arguments
againbtn.addEventListener('click',()=>{
    displayMessage("Start Guessing...");
    document.querySelector('.score').textContent=20;
    number.textContent='?';
    document.querySelector('.guess').value='';
    body.style.backgroundColor = '#222';
});

