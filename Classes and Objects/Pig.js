class Pig extends Parent{
constructor(x,y,w,h){
super(x,y,w,h)
this.image=loadImage("sprites/enemy.png")
this.visibility=255
}
display(){

if(this.body.speed<4){
    super.display();
}
else{
    
    World.remove(world,this.body)
    push()
    this.visibility-=5
    tint(255,this.visibility)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop ()
}
}

score(){
if (this.visibility<0 && this.visibility>-1001){
score=score+1

} 
}
}