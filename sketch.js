var bg;
var snowflakeImg;
var snowflake;
var snowflakeBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  
  bg=loadImage("snow1.jpg");
  snowflakeImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
 
  snowflake = createSprite(650,30);
	snowflake.addImage(snowflakeImg);
	snowflake.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	snowflakeBody = Bodies.circle(650,30,5, {restitution:0.5, isStatic:true});
	World.add(world,snowflakeBody);
	
	Engine.run(engine);
  

  
}

function draw() {
  background(bg); 
  snowflake.x= snowflakeBody.position.x 
  snowflake.y= snowflakeBody.position.y 
  

  console.log(snowflake.y);

  if(snowflake.y > 470 && snowflakeBody.position.y > 470 ){
  Matter.Body.setStatic(snowflakeBody,true);
  }
  
  drawSprites();

}
function keyPressed() { 
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(snowflakeBody,false);
 } 
}
