const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine,world;
var ground
var polyImg






function preload() {

 //polyImg =  loadImage("p5.play-boilerplate-master/download.png");
//polygon.addImage("polyImg");

}






function setup() {

  createCanvas(800,400);
  engine= Engine.create();
  world = engine.world;

polygon = new Ball(200,100,40,40)


  ground = new Ground(400,380,800,10)

  //level two
  block8 = new Box(330,225,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  //level three
  block13 = new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  //top
  block16 = new Box(390,155,30,40);

  rope = new Rope(polygon.body,{x:200,y:100})
 
    
}

function draw() {
  Engine.update(engine)
  background(255,255,255);


  ground.display();
 block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon.display();
  rope.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY})
}

  



    
