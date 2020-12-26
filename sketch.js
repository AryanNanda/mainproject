
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Body = Matter.Body;
var MarioSound;
var button,box;
var bg,play,play2,bg2,bg3,bg4;
var gameState = 0 ;
function preload()
{
play = loadSound("Music/Music.mp3");
MarioSound = loadSound("Mario/Mario Sound.mp3");
play2 = loadSound("Music2/Music2.mp3");
Mario = loadImage("images/Mario.png")
bg = loadImage("images/cool-backgrounds.png");
bg2 = loadImage("images/images.png");
bg3 = loadImage("images/Hoop.png");
bg4 = loadImage("images/mariolvl2.png")
bg5 = loadImage("images/mariolvl3.png")
}

function setup() {
  createCanvas(900,600);
engine = Engine.create();
world = engine.world;
//Create the Bodies Here.

Engine.run(engine);
buttons = new Buttons;

//Play music in Starting
//play.play();
 
}
function draw() {
rectMode(CENTER);
if(gameState===0)
background(bg);
buttons.display();
}
function keyPressed(){
  if(keyDown==32){
    Mario.x = Mario.x-10
  }
}


