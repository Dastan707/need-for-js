'use strict';
const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');


start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
    ArrowDown: false,
    ArrowUp: false,
    ArrowRight: false,
    ArrowLeft: false
};

const settings = {
    start: false,
    score: 0,
    speed: 3
};


function startGame(){
    start.classList.add('hide');
    settings.start = true;
    gameArea.appendChild(car);
    requestAnimationFrame(playGame);
}

function playGame(){
    console.log('Play game!');
    if(settings.start){
    requestAnimationFrame(playGame);
    }
}

function startRun(event){
    keys[event.keys] = true;
}

function stopRun(event){
    keys[event.keys] = false;

}

