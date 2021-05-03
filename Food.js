class Fishfood{
    constructor(foodStock,lastFed){
      this.image=loadImage("fishfood.png");
      this.foodStock=foodStock;
      this.lastFed=lastFed;
    }
  display(){
    imageMode(CENTER);
    image(this.image,100,300,40,40);
    var x=510;
    var y=260;
    for(var i=0; i<this.foodStock; i++){
        if(i===0){
        x=30;
        y=y+40;

        }
        image(this.image,x,y,40,40);
        x=x+35;
         }

  }
}


