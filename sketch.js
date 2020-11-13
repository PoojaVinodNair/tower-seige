const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball;
var chain;
var ground;
var b1,b2;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

  

  ball=new Ball(100,200,30);
  chain=new Slingshot(ball.body,{x:100,y:200})
  ground=new Ground(400,200,200,20);
  b1=new Box (400,190,50,50);
  b2=new Box(340,120,50,50)
}

function draw() {
  background("grey");  
  Engine.update(engine);

  ball.display();
  chain.display();
  ground.display();
  b1.display();
  b2.display();
}