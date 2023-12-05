

var mountainImages = ["imagenes/mountains01.png","imagenes/mountains02.png","imagenes/mountains03.png","imagenes/mountains04.png"];
var cloudImages = ["imagenes/cloud01.png","imagenes/cloud02.png"];
var brickImages = ["imagenes/blocks001.png","imagenes/blocks002.png","imagenes/blocks003.png"];;
var coinsImags = ["imagenes/coin01.png","imagenes/coin02.png","imagenes/coin03.png","imagenes/coin04.png","imagenes/coin05.png"];
var pipeImages = ["imagenes/tube.png"];
var platformImages = ["imagenes/platform.png"];
var enemyMushroomImage = ["imagenes/enemyMushroom01.png","imagenes/enemyMushroom02.png"];

var spriteNumber={
  mountain: 6,
  cloud: 10,
  brick: 5,
  pipe: 5,
  coin: 10,
  enemyMushroom: 5,

}



// set every sprites configs
function setSprites(){
  setSpriteGroups();
  loadStaticObjects( mountains, mountainImages, spriteNumber.mountain ,1.5, gameConfig.screenX, gameConfig.screenY-35, gameConfig.screenY-35);
  loadStaticObjects( clouds, cloudImages, spriteNumber.cloud, 0, gameConfig.screenX, 20, gameConfig.screenY*0.5 );
  loadStaticObjects( bricks, brickImages, spriteNumber.brick, gameConfig.screenX*0.1, gameConfig.screenX*0.9, gameConfig.screenY*0.1, gameConfig.screenY*0.7 );
  loadStaticObjects( pipes, pipeImages, spriteNumber.pipe, 50, gameConfig.screenX, gameConfig.screenY-20, gameConfig.screenY+10 );
  loadAnimatedObjects( coins, coinsImags, 'shine', spriteNumber.coin, "get", false, 0, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75 );
  loadAnimatedObjects( enemyMushrooms, enemyMushroomImage, 'move', spriteNumber.enemyMushroom, 'live', true, gameConfig.screenX*0.5, gameConfig.screenX, gameConfig.screenY*0.35, gameConfig.screenY*0.75 );
  loadPlatforms();
}


//declare sprite groups 
function setSpriteGroups(){
  //groups 
  bricks = new Group();
  enemyMushrooms = new Group();
  clouds = new Group();
  mountains = new Group();
  pipes = new Group();
  platforms = new Group();
  coins = new Group();
};


//load static object function
function loadStaticObjects( group, imageArray, spriteNumber, randomPosStartX, randomPosEndX, randomPosStartY, randomPosEndY) {
  for(var i = 0; i < spriteNumber; i++) {
    
    // load random image in image array
    var randomNumber=floor((random()*10)%imageArray.length);
    var img = loadImage(imageArray[randomNumber]);

    group[i] = createSprite(random(randomPosStartX, randomPosEndX), random(randomPosStartY, randomPosEndY));
    group[i].addImage(img);
    // group[i].scale=scales;
  }
};

//load animate object function
function loadAnimatedObjects( group, imageArray, animationName, spriteNumber, spriteStatusName, spriteStatusValue,  randomPosStartX, randomPosEndX, randomPosStartY, randomPosEndY) {
  for(var i = 0; i < spriteNumber; i++) {
    
    group[i] = createSprite(random(randomPosStartX, randomPosEndX), random(randomPosStartY, randomPosEndY));
    group[i].addAnimation(animationName, imageArray[0], imageArray[1]);
    group[i].scale = 1.5;
    group[i][spriteStatusName] = spriteStatusValue;

  };
};


// load platforms
function loadPlatforms() {
  img=loadImage("imagenes/platform.png");
  for(i=0;i<70;i++){
    randomNumber=random();
    if(randomNumber>0.2){
      platforms[i]=createSprite(gameConfig.screenX-i*19,gameConfig.screenY-10);
    }else{
      platforms[i]=createSprite(random(0,gameConfig.screenX),gameConfig.screenY-10);
    }
    platforms[i].addImage(img);
  };
};



// load Mario animation
function MarioAnimation(){
  mario=createSprite(gameConfig.startingPointX, gameConfig.startingPointY, gameConfig.startingPoint, 0.30);
  mario.addAnimation("stand",'imagenes/mario06.png');
  mario.addAnimation("move",'imagenes/mario01.png','imagenes/mario03.png');
  mario.addAnimation("crouch",'imagenes/mario18.png');
  mario.addAnimation("jump",'imagenes/mario05.png');
  mario.addAnimation("dead",'imagenes/mario24.png');
};





