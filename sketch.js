//Create variables here
var database;
var fish, fishImage, happyFishImage;
var food;
var addB, feedB;

function preload(){
fishImage=loadImage("fish.png");
happyFishImage=loadImage("happyFish.png");
}


function setup() {
  database = firebase.database();
	createCanvas(600, 600);
  
  //Creating the fish
  fish=createSprite(550,300,40,40);
  fish.addImage(fishImage);
  fish.scale=0.3;

  //Creating the fish-food
  food=new Fishfood(10);

  //Creating the 'FEED FOOD' button
  feedB=createButton("Feed Food");
  feedB.position(500,100);
  feedB.mousePressed(feedFood);

  //Creating the 'ADD FOOD' button
  addB=createButton("Add Food");
  addB.position(700,100);
  addB.mousePressed(addFood);
}


function draw() { 
  background("lightblue");
  food.display();
  fedTime=database.ref('Feed Time');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
fill("white");
textSize(20);
if(lastFed>=12){
text("Last you fed Goldie:"+lastFed%12+"PM",500,400);
}
else if(lastFed===0){
text("Last you fed Goldie:12 AM",500,400);
}
else{
  text("Last you fed Goldie:"+lastFed+"AM",500,400);
}
  drawSprites();
}


function addFood(){
  food=new Fishfood(10);
}


function feedFood(){
  fish.addImage(happyFishImage);
  food=new Fishfood(9);
  database.ref('/').update({
    FeedTime:hour
  })
}


