class Parent{
    constructor(x,y,w,h,a){
    
        var options = {
            density: 1.5,
            friction: 1,
            restitution: 0.8
        }
    this.body=Bodies.rectangle(x,y,w,h,options)
    this.image=loadImage("sprites/base.png")
    World.add(world,this.body)
    this.w=w;
    this.h=h;
    
    }
    display(){
    push()
    translate(this.body.position.x, this.body.position.y)
    rotate (this.body.angle)
    imageMode(CENTER)
    image(this.image,0,0,this.w,this.h,this.a)
    pop()
    }
    }
