var bgImg,canvase;
var cat,catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3;


function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg1 = loadAnimation("cat1.png");
    mouseImg1 = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png");
    catImg3 = loadAnimation("cat4.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");


}

function setup(){
    
    //create tom and jerry sprites here
    canvas= createCanvas(1000,800);
    cat=createSprite(800,600);
    cat.addAnimation("catSleeoing",catImg1);
    cat.scale=0.2;
    mouse=createSprite(200,600);
    mouse.addAnimation("ratStanding",mouseImg1);
    mouse.scale=0.1;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catRunning",catImg3);
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouseImg",mouseImg3);
        mouse.scale=0.1;
        mouse.changeAnimation("mouseImg");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === RIGHT_ARROW){
    cat.velocityX=5;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAnimation("catRunning")
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

  if(keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning")
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}


}
