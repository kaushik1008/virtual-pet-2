//Create variables here
var dog
var HappyDog
var Database
var foodS
var foodStock
var feed,add
var lastFed,fedTime
var foodObj
function preload()
{
  //load images here
  img1=loadImage("images/doglmg1.png");
  img2=loadImage("images/doglmg.png");
  
}

function setup() {
  createCanvas(1000, 500);
  database=firebase.database();

foodObj=new Food()

dog=createSprite(100,50,)
dog.adddImage(img1)
 dog.scale=0.4;

foodStock = database.ref('Food');
foodStock.on("value", readPosition);


feed = createButton("FEED the Dog")
feed.position(700,95)
feed.mousePressed(FeedDog)

add = createButton("ADD FOOD")
add.position(900,95)
add.mousePressed(AddFood)
}


function draw() {  

background(46,139,87);
foodObj.display();


fedTime=database.ref('fedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});

Fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("last Feed:12AM",350,30);
}else if(lastFed===0){
  text("last Feed:12 AM",350,30);
}else{
  text("last Feed:"+lastFed+"AM",350,30);
}

drawSprites();



}