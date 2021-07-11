var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ram,arrow,gameOver,start,win,object,cloud;
var backgroundImg,ramImg,ravanImg,ravanImg;
var arrowImg,gameoverImg,startImg,winImg,cloudImg;
var score,arrowGroup;
var arrows=100;
var ravankilled=0;
var gamePlay;

var ravan1,ravan2,ravan3
var ravanVisible1=false,ravanVisible2=false,ravanVisible3=false;


function preload(){
backgroundImg=loadImage("background.jpg");
ramImg=loadImage("shree ram Img1.png");
ravanImg=loadImage("ravan.png");
gameoverImg=loadImage("game over.png");
startImg=loadImage("start.png");
arrowImg=loadImage("Arrow.png");
winImg=loadImage("win1.png");
cloudImg=loadImage("newcloud.png");
}
function setup() {
  

  createCanvas(800,600);
  ram=createSprite(100, 50, 50, mouseX);
  ram.addImage(ramImg);
  ram.scale=0.5;

  win= createSprite(400,200,20,20);
  win.addImage(winImg);
  win.visible=false;

  end= createSprite(400,200,250,20);
  end.addImage(gameoverImg);
  end.visible=false;
  
  
  arrowGroup=new Group();
  ravanGroup1=new Group();
  ravanGroup2=new Group();
  ravanGroup3=new Group();
  cloudGroup1=new Group();
  cloudGroup2=new Group();
  cloudGroup3=new Group();

  gamePlay=true;
  
}

function draw() {
  background(backgroundImg);  
  textSize(30);
  fill("red")
  text("Ravan Killed: "+ ravankilled, 510,50);

  if(gamePlay==true){
    if(frameCount%60==0){
      if(ravanVisible1!=true){
        ravanVisible1=true
        Ravan1()
      }else{
        ravanVisible1=false
        ravanGroup1.destroyEach();
        cloudGroup1.destroyEach();
      }
    }
  
    if(frameCount%120==0){
      if(ravanVisible2!=true){
        ravanVisible2=true
        Ravan2()
      }else{
        ravanVisible2=false
        ravanGroup2.destroyEach();
        cloudGroup2.destroyEach();
      }
    }
  
    if(frameCount%90==0){
      if(ravanVisible3!=true){
        ravanVisible3=true
        Ravan3()
      }else{
        ravanVisible3=false
        ravanGroup3.destroyEach();
        cloudGroup3.destroyEach();
      }
    }
  }

  if(arrowGroup.isTouching(ravanGroup1)){
    arrowGroup.velocityX=0;
    arrowGroup.destroyEach();
    ravanGroup1.destroyEach();
    cloudGroup1.destroyEach();
    ravankilled+=1;
    arrows=arrows+20
  }

  if(arrowGroup.isTouching(ravanGroup2)){
    arrowGroup.velocityX=0;
    arrowGroup.destroyEach();
    ravanGroup2.destroyEach();
    cloudGroup2.destroyEach();
    ravankilled+=1;
    arrows=arrows+20
  }

  if(arrowGroup.isTouching(ravanGroup3)){
    arrowGroup.velocityX=0;
    arrowGroup.destroyEach();
    ravanGroup3.destroyEach();
    cloudGroup3.destroyEach();
    ravankilled+=1;
    arrows=arrows+20
  }

  text("Arrows Left:" + arrows,100,50);

  if(gamePlay==true) ram.y = World.mouseY

  if(arrows <= 0)
  {
    gamePlay=false;
    end.visible=true;
  }

  if(ravankilled===10 ){
    gamePlay=false;
    win.visible=true;
  }

  if(gamePlay==false){
    fill("white")
    text("Press 'r' to restart",300,400);
  }

  if(keyDown("space") && gamePlay==true && arrows>0){
   createArrow();
  }

  if(keyDown("r") && gamePlay==false){
    arrows=100;
    ravankilled=0;
    gamePlay=true;
    end.visible=false;
    win.visible=false;

   }
 
  drawSprites();
}
function createArrow(){
  arrow=createSprite(200,mouseY , 50, 50);
  arrow.addImage(arrowImg);
  arrow.scale=0.1;
  arrow.velocityX =25;  
  arrowGroup.add(arrow);
  arrows=arrows-1
  return arrow;
}

function Ravan1(){
  ravan=createSprite(700,150,20,20);
  cloud=createSprite(700,200,20,20);
  ravan.scale=0.2;
  cloud.scale=0.1;
  ravan.addImage(ravanImg);
  cloud.addImage(cloudImg);
  ravanGroup1.add(ravan);
  cloudGroup1.add(cloud);
  return ravan;
}

function Ravan2(){
  ravan=createSprite(700,300,20,20);
  cloud=createSprite(700,350,20,20);
  ravan.scale=0.2;
  cloud.scale=0.1;
  ravan.addImage(ravanImg);
  cloud.addImage(cloudImg);
  ravanGroup2.add(ravan);
  cloudGroup2.add(cloud);
  return ravan;
}

function Ravan3(){
  ravan=createSprite(700,450,20,20);
  cloud=createSprite(700,500,20,20);
  ravan.scale=0.2;
  cloud.scale=0.1;
  ravan.addImage(ravanImg);
  cloud.addImage(cloudImg);
  ravanGroup3.add(ravan);
  cloudGroup3.add(cloud);
  return ravan;
}

function spawnClouds() {

    if (frameCount % 60 === 0) {

    //   ravan= createSprite(600, 200, 50, 50);
    // ravan.addImage(ravanImg);
    // ravan.scale=0.5;
    // ravan.velocityX = -3;

    // ravan.debug=false;
    // ravan.setCollider("circle",0,0,120);
    
    // var cloud = createSprite(790,120,40,10);
    // cloud.y = Math.round(random(80,120));
    // cloud.addImage(cloudImg);
    // cloud.scale = 0.1;
    // cloud.velocityX = -3;
    // ravan.x=cloud.x;
      
    //  cloudsGroup.add(cloud);

    }}