var BobsGroup, TopObsGroup;
var bg, bgImg;
var t1, t2;
var sun, sunImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var b1, b2, b3;

function preload() {
  bgImg = loadImage("assets/bg.png");
  sunImg = loadImage("assets/sun.png");
  b1 = loadImage("assets/obsBottom1.png");
  b2 = loadImage("assets/obsBottom2.png");
  b3 = loadImage("assets/obsBottom3.png");
  t1 = loadImage("assets/obsTop1.png");
  t2 = loadImage("assets/obsTop2.png");
  balloonImg = loadAnimation("assets/balloon1.png", "assets/balloon2.png", "assets/balloon3.png");
}

function setup() {
  createCanvas(windowWidth - 70, windowHeight - 70)

  //creating top and bottom grounds
  bottomGround = createSprite(width / 2, height - 5, width, 10);
  bottomGround.visible = true;
  bottomGround.shapeColor = "black"

  //sun
  sun = createSprite(100, 80, 15, 15);
  sun.addImage(sunImg);
  sun.scale = 0.175

  topGround = createSprite(200, 10, 800, 20);
  topGround.visible = false;

  //creating balloon     
  balloon = createSprite(100, 200, 20, 50);
  balloon.addAnimation("balloon", balloonImg);
  balloon.scale = 0.2;

  //TopObsGroup
  TopObsGroup = new Group();
  BobsGroup = new Group();
}

function draw() {

  background("skyblue");

  //making the hot air balloon jump
  if (keyDown("space")) {
    balloon.velocityY = -6;

  }

  //adding gravity
  balloon.velocityY = balloon.velocityY + 0.5;

  spawnBottomObs();
  spawnTopObs();
  drawSprites();
}

function spawnBottomObs() {
  if (frameCount % 120 === 0) {
    var bottom = createSprite(width, height - 140);
    var x = Math.round(random(1, 3));
    switch(x) { 
      case 1 : bottom.addImage(b1);
      break 

      case 2 : bottom.addImage(b2);
      break 

      case 3 : bottom.addImage(b3);
      break 
    }

    bottom.scale = 0.15;
    bottom.velocityX = -4;
    bottom.lifetime = 400; 

    BobsGroup.add(bottom);
  }
}

function spawnTopObs() {
  if (frameCount % 60 === 0) {
    var top = createSprite(width, 50);
    var x = Math.round(random(1, 2));
    switch(x) { 
      case 1 : top.addImage(t1);
      break 

      case 2 : top.addImage(t2);
      break 
    }

    top.y = Math.round(random(40, 100));
    top.scale = 0.1;
    top.velocityX = -4;
    top.lifetime = 400; 

    TopObsGroup.add(top);
  }
}