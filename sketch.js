
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score,survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.VelocityX=-4
  ground.x=ground.width/2;
  


  obstaclesGroup = createGroup();
  bananaGroup = createGroup();

}


function draw() {
  background("white");
 
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score, 500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime, 100,50);
  
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >=100) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8;
  spawnBanana();
  spawnObstacles();
  monkey.collide(ground);
  
  drawSprites(); 
}

function spawnBanana() {
 if (frameCount % 80 === 0) {
      banana=createSprite(600,250,40,10)
      banana.addImage(bananaImage);
      banana.scale=0.1;
      banana.y = Math.round(random(100,200));
      banana.velocityX = -3;
    
      //assign lifetime to the variable
      banana.lifetime = 300;
      monkey.depth = banana.depth + 1;

    bananaGroup.add(banana);
  }
  
}
    
function spawnObstacles(){
  if(World.frameCount%200===0){
    var obstacles=createSprite(400,330,20,10);
    obstacles.addImage(obstaceImage);
    //obstacles.y = Math.round(random(120,200));
    obstacles.velocityX = -6;
    obstacles.scale=0.12;
    obstacles.setLifetime=50;    
    obstaclesGroup.add(obstacles);
  }
}