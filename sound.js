//play button
const play_btn01 = document.getElementById('play-btn01');

//audio file
const sound01 = new Audio("sound/sound_01.mp3");

//play event
play_btn01.addEventListener( 'click' , play );

function play(){
	sound01.play();
}

//play button
const play_btn02 = document.getElementById('play-btn02');

//audio file
const sound02 = new Audio("sound/sound_02.mp3");

//play event
play_btn02.addEventListener( 'click' , play );

function play(){
	sound02.play();
}

//play button
const play_btn03 = document.getElementById('play-btn03');

//audio file
const sound03 = new Audio("sound/sound_03.mp3");

//play event
play_btn03.addEventListener( 'click' , play );

function play(){
	sound03.play();
}