//Create variables here
var dog,happyDog,foodS,foodStock,database;
var dogImage,happyDogImage;
function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
  happyDogImage = loadImage("happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  console.log(database);

  var dog = createSprite(200,200,50,50);
  dog.addImage("dog",dogImage);
  dogImage.scale = 0.1;

   var happyDog = createSprite(250,250,50,50);
   happyDog.addImage("happyDog",happyDogImage);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87);

if(keyDown("UP_ARROW")){
  writePosition(0,-1)
}

if(keyWentUp(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImage)
}
  drawSprites();
 

}

function readStock(data){
foodS = data.val();


}

function writeStock(x){
if(x<=0){
x=0;
}else{
  x= x-1;

}
  database.ref('/').update({
 Food:x 
})

}


