class Dustbin{
constructo(x,y,width,height){
var option={

isStatic: true,
restitution: 0.3, 
density: 1.2,
friction:0.5

}

this.body=Bodies.rectangle(x,y,width,height,option)
World.add(world,this.body);

this.image=loadImage("dustbin.png");
console.log(this.body);
}

display(){
   if(this.body.position!==undefined){

    var pos= this.body.position;
    var angle= this.body.angle;
      
      push();
      translate(pos.x,pos.y);
    rotate(angle);
    fill('red')
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
  
   }
 
}


}