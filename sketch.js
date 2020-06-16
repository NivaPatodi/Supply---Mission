const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;



var helicopterIMG, packageIMG;

var helicopter, package, ground;

var package1



function preload()

{

	helicopterIMG=loadImage("helicopter.png");

	packageIMG=loadImage("package.png");

}



function setup() 

{

	createCanvas(800, 700);



	engine = Engine.create();

	world = engine.world;



	package1 = createSprite(0, 200, 10,10);

	package1.addImage(packageIMG)

	package1.scale=0.2;



	helicopter = createSprite(0, 200, 10,10);

	helicopter.addImage(helicopterIMG)

	helicopter.scale=0.6

	helicopter.velocityX = 5;



	ground = createSprite(400, 650, 800,10);

	ground.shapeColor=color(255);



	var ground_options = 
	
	{
		
		isStatic : true
	
	}

	

	var package_options =
 
	{

		restitution : 0.5,

		isStatic : true

	}



	ground = Bodies.rectangle(400, 650, 800, 10, ground_options);

	World.add(world, ground);

 
	package = Bodies.circle(0, 200, 40, package_options);

	World.add(world, package);
  

	console.log(package);

}




function draw() 

{

	background(0);

	rectMode(CENTER);

	ellipseMode(RADIUS);


	package1.y = package.position.y;


	package1.position.x = package1.position.x + 5;


	Engine.update(engine);


	drawSprites();

}



function keyPressed() 

{

 	if (keyCode === DOWN_ARROW) 
 	
	{

		Matter.Body.setStatic(package, false);
 
		package1.position.x = package1.position.x;
 
 	}

}