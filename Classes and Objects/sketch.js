

//arrays

var students=["Evaa","Gupta"," - Grade",5, true, null, false, undefined,["a",1]]
console.log(students[8][0])
students.push("haha")
console.log(students)
console.log(students.length)
students.pop()
console.log(students)
console.log(students.length)
const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var world,engine
var bg = "sprites/bg.png"
var bgimg
var score = 0
function preload(){
setBackground();
}

function setup() {
createCanvas(1200,400);
engine=Engine.create()
world=engine.world
bird = new Bird(200,50,50,50)
box1 = new Box(700,320,70,70)
box2 = new Box(920,320,70,70)
ground = new Ground(600,400,1200,20)
platform = new Ground(150,305,300,170)
pig1 = new Pig (810,350,50,50)
log1 = new Log (810,260,300,20,PI)


box3 = new Box(700,240,70,70)
box4 = new Box(920,240,70,70)
pig2 = new Pig (810,220,50,50)
log2 = new Log (810,180,300,20,PI)

box5 = new Box(810,160,70,70)
log3 = new Log (760,120,150,20,PI/8) 
log4 = new Log (870,120,150,20,PI/8) 
//log5 = new Log (230,180,50,20,PI/7)
sling = new SlingShot(bird.body,{x:200, y:50})
}

function draw() {
  if (bgimg){
  background(bgimg); 
  fill ("blue") 
  textSize(35)
  text ("Score: "+score, 1000,40)
  }

 Engine.update(engine)
bird.display()
box1.display()
box2.display()
ground.display("lightblue");
pig1.display()
pig1.score()
log1.display();
box3.display()
box4.display()
pig2.display()
pig2.score()
log2.display();
box5.display();
log3.display();
log4.display();
platform.display("#301708");
//log5.display();
sling.display();
}

function mouseDragged (){

  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
sling.fly();
  
}

async function setBackground(){

var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJSON = await response.json()
var dateTime = responseJSON.datetime
var hour = dateTime.slice(11,13)

if (hour > 05 && hour <= 18){
bg = "sprites/bg.png"
}
else{
  bg="sprites/bg2.jpg"
}

bgimg=loadImage(bg)
}
function keyPressed(){
if  (keyCode==32){
Matter.Body.setPosition(bird.body,{x:200, y:50})
sling.attach(bird.body)
bird.trajectory=[]
}
}
