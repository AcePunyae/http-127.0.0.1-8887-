var fixedrect;
var moverect;

function setup() {
  createCanvas(800,400);
    moverect=createSprite(400, 200, 50, 50);
    fixedrect=createSprite(200,100,200,20);
}

function draw() {
  background(255,255,255);  

  moverect.x=World.mouseX;
  moverect.y=World.mouseY;
  console.log(moverect.x-fixedrect.x);
  if((moverect.x-fixedrect.x)<=((moverect.width/2)+(fixedrect.width/2))
    && (fixedrect.x-moverect.x)<=((moverect.width/2)+(fixedrect.width/2))
    &&(moverect.y-fixedrect.y)<=((moverect.height/2)+(fixedrect.height/2))
    &&(fixedrect.y-moverect.y)<=((moverect.height/2)+(fixedrect.height/2))){

moverect.shapeColor= "blue" ;
fixedrect.shapeColor= "blue";

  }

  else {
moverect.shapeColor="black";
fixedrect.shapeColor="black";


  }



  drawSprites();
}
