
var dog1;
var food = 20
var database;
var bottles 
var addingButton 
var feedingButton
var LastFed = 0
var waiting = 9
var happy = 10
var gameState = waiting
var fedTime = 0




//Create variables here

function preload()
{
	//load images here
}

function setup() 
{
  database = firebase.database();
	createCanvas(1000, 856);
  var foodref = database.ref("food")
  foodref.on("value",readStock)

  var hourref = database.ref("hour")
  hourref.on("value",readHour)

  dog1 = new Dog(800,500,20,20)
  bottles = new FoodStock(80,300)



  addingButton = createButton("AddFood")
  addingButton.position(810,95)
  addingButton.mousePressed(addFood)

  feedingButton = createButton("Feed The Dog")
  feedingButton.position(700,95)
  feedingButton.mousePressed(feedDog)


 

  
}


function draw() 
{  
  background(46,139,87)

  

  bottles.display()
  fill(255,255,254)
  textSize(15)
      if(LastFed>-12)
      {
        text("Last Feed : " + LastFed%12 + "PM", 200,59)
      }else if(LastFed==0){

        text("Last Feed: 12 AM",200,59)
        
        
      }else 
      {
        text("Last Feed :" + LastFed + "AM",200,59)
      }

    
  drawSprites();
  //add styles here
  
  noStroke()
  textSize(17)
  fill("red")


  text("Note:Press UP_ARROW Key To Feed Drago Milk but if on phone just deal with the Feed The dog button.",100,800)

 
  // text("LastFed:" + LastFed,200,95)



  if(gameState == waiting)
  {
    if(keyWentDown(UP_ARROW))
    {
      dog1.happyDog()

     

      bottles.take()

      gameState = happy

     database.ref('/').set({
       'food':bottles.foodStock,
       'hour':hour()
     })

    }
  }
  if(gameState == happy)
  {
    textSize(20)
  

    if(frameCount%120 == 0)
    {

    dog1.waitingDog()

    

    gameState = waiting

    }

    if(keyDown(DOWN_ARROW))
    {

    
 
  database.ref('/down').set
  ({
    'food':bottles.foodStock,
    'hour':hour()

  })
  }

    
 

    
    
    

    
  }
}

function readStock(data)
{
  console.log("My value" + data.val())

  bottles.foodStock = data.val()

  
}

function readHour(data)
{
  console.log("My hour", + data.val())

  LastFed = data.val()
}

// function writeStock(newFood)
// {
//   database.ref("/").set({

//     "food":newFood

//   })
// }

function feedDog()
{
  if(gameState == waiting)
  {
  

    bottles.take()

    gameState = happy

    dog1.happyDog()

    

    database.ref('/').set({
      'food':bottles.foodStock,
      'hour':hour()
    })

    console.log("LastFed" + hour())

  


      
    
  }
}
function addFood()
{
  if(gameState == waiting && bottles.foodStock<45)
  {


  bottles.add()

  database.ref('/').set({

    'food':bottles.foodStock,
    'hour':hour()
  })
}

}




