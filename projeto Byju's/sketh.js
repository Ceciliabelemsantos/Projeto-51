var predio1, predio1Img, predio2, predio2Img, predio3, predio3Img, predio4, predio4Img, predio5,
 predio5Img, predi7, preido7Img, predio8, predio8Img, predio9, predio9Img, prediochamas, prediochamasImg;

 var heroi, heroiImg, monstro, monstroImg;


function preload(){

  predio1Img= loadImage("predio 1.png");
  predio2Img= loadImage("predio 2.png");
  predio3Img= loadImage("predio 3.png");
  predio4Img= loadImage("predio 4.png");
  predio5Img= loadImage("predio 5.png");
  predio6Img= loadImage("predio 6.png");
  predio7Img= loadImage("predio 7.png");
  predio8Img= loadImage("predio 8.png");
  predio9Img= loadImage("predio 9.png");

  heroiImg= loadImage("super-heroi(1).png");
  monstroImg= loadImage("monstro.png");
}

function setup(){
 canvas = createCanvas(windowWidth, windowHeight);
  
  
 heroi = createSprite(50,160,20,50);
 monstro = createSprite(50,160,20,50);

 predio1 = createSprite(50,160,20,50);
 predio2 = createSprite(50,160,20,50);
 predio3 = createSprite(50,160,20,50);
 predio4 = createSprite(50,160,20,50);
 predio5 = createSprite(50,160,20,50);
 predio6 = createSprite(50,160,20,50);
 predio7 = createSprite(50,160,20,50);
 predio8 = createSprite(50,160,20,50);
 predio9 = createSprite(50,160,20,50);

 heroi.addImage("heroi",heroiImg);
 monstro.addImage("monstro",monstroImg);

 predio1.addImage("predio1",predio1Img);
 predio2.addImage("predio2",predio2Img);
 predio3.addImage("predio3",predio3Img);
 predio4.addImage("predio4",predio4Img);
 predio5.addImage("predio5",predio5Img);
 predio6.addImage("predio1",predio6Img);
 predio7.addImage("predio1",predio7Img);
 predio8.addImage("predio1",predio8Img);
 predio9.addImage("predio1",predio9Img);
 
 
}

function draw(){
  background("white")


drawSprites();
}
