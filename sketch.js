const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var groundObj;
var left_side;
var right_side;
var ball;



function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(width/2, 800, width, 50);
	left_side = new Ground(550, 750, 50, 200);
	right_side = new Ground(750, 750, 50, 200);

	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density: 1.2,
	}

	ball = Bodies.circle(100, 100, 20, ball_options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  background(51);

  ellipse(ball.position.x,ball.position.y,20);
  
  groundObj.show();
  left_side.show();
  right_side.show();
  

  //Engine.update(engine);

  drawSprites();
  
 
}
function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(ball,ball.position,{x:85,y:-55});
}
}


