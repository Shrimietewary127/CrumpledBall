
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var paper,dustbin1,dustbin2,dustbin3,ground;
var launcher;
function preload()
{
	//paper=loadImage("paperImg.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(200,200);
/*paper.addImage(paper)*/
dustbin1=new Dustbin(200,200,10,10);
launcher=new Launcher(paper,{x:100,y:200});
	Engine.run(engine);
  
}


function draw() {
  
  background('white');
  Engine.update(engine);

  paper.display();
  dustbin1.display();
  launcher.display();

 
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}

function mouseDragged(){
	Matter.Body.setPosition(paper, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
	slingshot.fly();
  }

}

