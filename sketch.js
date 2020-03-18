var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloudimage;
var Obstacle1,Obstacle2,Obstacle3,Obstacle4,Obstacle5,Obstacle6;
var obstacleGroup;
var cloudGroup;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png")
  cloudimage=loadImage("cloud.png");
  Obstacle1=loadImage("obstacle1.png");
  Obstacle2=loadImage("obstacle2.png");
  Obstacle3=loadImage("obstacle3.png");
  Obstacle4=loadImage("obstacle4.png");
  Obstacle5=loadImage("obstacle5.png");
  Obstacle6=loadImage("obstacle6.png");
  
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  obstacleGroup=new Group();
  cloudGroup=new Group();

  
}

function draw() {
  background(0);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
    
  }
  
  trex.collide(invisibleGround);
  spawnObstacles();
  spawncloud();
  
  drawSprites();
}
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,180,10,40);
    obstacle.velocityX = -6
    
    //generate random obstacles
    var rand =Math.round(random (1,6)) ;
    console.log(rand);
    switch (rand){
      case 1:obstacle.addImage("Obstacle1",Obstacle1);
        break;
    case 2:obstacle.addImage("Obstacle2",Obstacle2);
        break;
        case 3:obstacle.addImage("Obstacle3",Obstacle3);
        break;
        case 4:obstacle.addImage("Obstacle4",Obstacle4);
        break;
        case 5:obstacle.addImage("Obstacle5",Obstacle5);
        break;
        case 6:obstacle.addImage("Obstacle6",Obstacle6);
        break;
        default:break;
        

    
    
    }
    
   //obstacle.setAnimation("obstacle" + rand);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
    
  }
}
function spawncloud() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,120,40,10);
    cloud.y = random(100,120);
    cloud.addImage ("cloudimage",cloudimage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 134;
        //add each cloud to the group
     cloudGroup.add(cloud);

    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
  }
}