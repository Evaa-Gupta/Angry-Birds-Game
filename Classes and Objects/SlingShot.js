class SlingShot{
    constructor(bodyA,pointB){
var options = {
bodyA:bodyA,
pointB:pointB,
stiffness: 0.004,
length: 15
}
this.sling=Constraint.create(options)
this.image1=loadImage("sprites/sling1.png")
this.image2=loadImage("sprites/sling2.png")
this.image3=loadImage("sprites/sling3.png")
World.add(world,this.sling)
this.pointB=pointB
    }

    fly(){
    this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }

display(){
image(this.image1,200,20)
image(this.image2,170,20)

strokeWeight(7)
stroke("#4dff06")

    if (this.sling.bodyA){

   if(this.sling.bodyA.position.x<220){
   
    line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
    line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
    // line (xA, yA, xB, yB)

    image(this.image3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30)
   }
    else{
        line(this.sling.bodyA.position.x+30,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
        line(this.sling.bodyA.position.x+30,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
        // line (xA, yA, xB, yB)
    
        image(this.image3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30)
    }
    
}}
}