var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var STAND,FELL;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


//preload the images
function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	

}

//create thee sprites :3
function setup() {
	createCanvas(800, 750);

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

//make em appear
function draw() {

	star.collide(fairy);
	
  background(bgImg);
  keyPressed();

  star.collide(fairy);

  drawSprites();

  fairy.setCollider("rectangle",450,20,200,10);

}

//make the  keys work
function keyPressed() {
	
	if(keyDown("left")){
		fairy.x = fairy.x - 5;
	}

	if(keyDown("right")){
		fairy.x = fairy.x + 5;
	}

	if(keyDown("down")){
	star.velocityY = 5;
	}
	
	if(keyDown("a")){
		fairy.x = fairy.x - 5;
	}

	if(keyDown("d")){
		fairy.x = fairy.x + 5;
	}

	if(keyDown("s")){
		star.velocityY = 5;
		}

}


