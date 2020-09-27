const eng=Matter.Engine;
const bod=Matter.Bodies;
const wor=Matter.World;

var e;
var w;
var b1,b2;
var ground;
function setup() {
  createCanvas(800,400);
  e=eng.create();
  w=e.world;
  
  b1=new box(449,100,100,150);
  b2=new box(400,150,100,100);
  ground=new gro(400,350,800,50);
}

function draw() {
  background(0);

  eng.update(e);  
  
  b1.display();
  b2.display();
  ground.display();
  
  drawSprites();
}