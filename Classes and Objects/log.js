class Log extends Parent{
    constructor(x,y,w,h,a){
        super(x,y,w,h,a)
Matter.Body.setAngle(this.body,a)
this.image=loadImage("sprites/wood2.png")

}
}