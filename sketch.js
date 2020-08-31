
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyIMG,boy;
var ground1


function preload(){
 boyIMG = loadImage("Sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(350,700,700,20);
	boy = createSprite(100,700,20,20);
	stone1  = new stone(80,650);
	tree1 = new tree(650,640,20,20);
	mango1 = new mango(500,600)
	mango2 = new mango(600,650);
	mango3 = new mango(550,625);
	chain1 = new slingshot(boy.body,rock.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

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
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
chain1.fly()
}



