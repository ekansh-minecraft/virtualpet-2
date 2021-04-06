class Dog
{
    constructor(x,y,w,h)
    {
 
   
        this.waitingImg = loadImage("dogImg.png")

        this.happyImage = loadImage("dogImg1.png")

        this.sprite = createSprite(x,y,w,h)


      this.sprite.addImage("doggy", this.waitingImg)

      this.sprite.scale = 0.2

 

        this.x = x
        this.y = y
        this.w = w
        this.h = h

        
    }

    happyDog()
    {

   
      

        this.sprite.addImage("doggy", this.happyImage)

        this.sprite.scale = 0.2

        console.log("happydog")


      

    }

    waitingDog()
    {

      this.sprite.addImage("doggy", this.waitingImg)

      this.sprite.scale = 0.2

      console.log("waiting")
    
    }

    
 
  
}