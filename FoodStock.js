class FoodStock
{
    constructor(x,y)
    {

        // store the x,y positons
        // load a bottle image

        this.x = x
        this.y = y

        this.image = loadImage("Milk.png")

        this.foodStock = 45

        // this.foodstock.addImage("milk", this.image)
    
    }
    

    take() {
        this.foodStock = this.foodStock - 1
    }
    add()
    {
        this.foodStock = this.foodStock + 1
    }

    display()
    {
        imageMode(CENTER)

        var x = this.x
        var y = this.y
        for(var i=0; i<this.foodStock; i++) {
            image(this.image, x, y, 40, 50)
            x = x + 30
            
         
            if(i%15 == 0)
            {
                x= this.x
                y = y + 40
            }

         
            
        }

           

       

        // image(this.image,x,y,w,h)

        // if(this.foodStock!=0)
        // {
        //   for(var o=0;x < this.foodstock;o++)
        //    {
        //        if(o%10==0)
        //        {
        //            x=80;
        //            y=y+50
        //        }

        //          image(this.image,x,y,30,40)
        //          x=x+30

        //    }
        // }
        


   
    }
}