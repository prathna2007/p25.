
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var d1,d2,d3
var ground
var ball
var engine,world
function preload()
{
	 dustbin = loadImage ("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	d1 = new Dustbin(400,650,200,20)
	d2 = new Dustbin(500,610,20,100)
	d3 = new Dustbin(300,610,20,100)

	ball = new Paper (100,100,50)

	Engine.run(engine);
    ground = new Ground (400,690,800,20);
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
}


function draw() {
  rectMode(CENTER);
  background("grey");
  d1.display();
  d2.display();
  d3.display();
  image(dustbin,300,455,200,200)
  ball.display();
  ground.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:55,y:-55});
	}
}

