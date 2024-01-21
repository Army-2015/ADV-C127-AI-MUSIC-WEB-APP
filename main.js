var piano_music = "";
var guitar_music = "";

function preload(){
    piano_music = loadSound("piano_music.mp3");
    guitar_music = loadSound("guitar_music.mp3");
}

function setup(){
    canvas = createCanvas(450, 450);
    canvas.position(530, 455);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 450, 450);
}