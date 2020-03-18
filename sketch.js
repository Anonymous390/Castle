const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box, box2, box3, box4, box5, box6, box7, box8;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 390, 410, 30);

  box = new Box(200, 200, 100, 100);

  box2 = new Box(280, 200, 50, 150);

  box3 = new Box(120, 200, 50, 150);

  box4 = new Box(330, 200, 50, 200);

  box5 = new Box(70, 200, 50, 200);

  box6 = new Box(175, 125, 50, 50);

  box7 = new Box(225, 125, 50, 50);

  box8 = new Box(200, 50, 50, 50);
  
}

function draw() {
  background(51);

  Engine.update(engine);

  ground.display();

  box.show();

  box2.show();

  box3.show();

  box4.show();

  box5.show();

  box6.show();

  box7.show();

  box8.show();

  drawSprites();
}