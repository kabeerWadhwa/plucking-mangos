
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyIMG,boy;
var ground1,mango1,mango2,mango3,stone1,tree1;


function preload(){
 boyIMG = loadImage("Sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,680,800,20);
	boy = createSprite(100,650,20,20);
	stone1  = new stone(80,650);
	tree1 = new tree(650,640,20,20);
	mango1 = new mango(100,100)
	mango2 = new mango(100,200);
	mango3 = new mango(100,300);
	chain1 = new slingshot(tree1.body,stone1.body)
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  Engine.update(engine);

  ground1.display();
  boy.display();
  stone1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  chain1.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
chain1.fly()
}



