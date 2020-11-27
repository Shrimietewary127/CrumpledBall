class Paper{

constructor(x,y){
var options={
isStatic: false,
restitution: 0.3, 
density: 1.2,
friction:0.5

}
this.body=Bodies.circle(250,200,4,options);
World.add(world,this.body);

this.image=loadImage("paper.png")
}

display(){
var pos= this.body.position
var angle= this.body.angle
push();
//translate(pos.x,pos.y);
//rotate(angle);
fill('red');
imageMode(CENTER)

image(this.image,pos.x,pos.y,this.width,this.height);
pop();

}


}