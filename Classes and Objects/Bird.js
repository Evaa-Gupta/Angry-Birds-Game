class Bird extends Parent{
constructor(x,y,w,h){
super(x,y,w,h)
this.image=loadImage("sprites/bird.png")
this.image2=loadImage("sprites/smoke.png")
this.trajectory=[]
}
display(){
   super.display()
   //this.body.position.x=mouseX
   //this.body.position.y=mouseY
   if (this.body.velocity.x>2 && this.body.position.x>200){
   var position=[this.body.position.x,this.body.position.y]
   this.trajectory.push(position)
}
for(var i = 0;i<this.trajectory.length;i++){
image(this.image2,this.trajectory[i][0],this.trajectory[i][1])
}

}
}