var ship_moving,seaImg
var ship
function preload(){
  ship_moving=loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png')
  seaImg=loadImage('sea.png')
}

function setup(){
  createCanvas(400,400);
  background("blue");
  
  sea=createSprite(300,200)
  sea.addImage('sea',seaImg)
  sea.scale=0.2

  ship=createSprite(130,200,30,30)
  ship.addAnimation('ship',ship_moving)
  ship.scale=0.3
}

function draw() {
  //background(0)
 drawSprites()
}