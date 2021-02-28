//string datatype
var name="shivanshi"
console.log(name)

var num=4
console.log(num)

var bool=true
console.log(bool)

var object
console.log(object)

object=null
console.log(object)

var arr1=[1,2,3,4,5]
console.log(arr1[4])

var ar2=["Hello",3,false]
console.log(ar2)
ar2.push(34)
console.log(ar2)
ar2.pop()
console.log(ar2)

var ar3=[[1,2],[3,4],[5,6]]
console.log(ar3[2][0])

//trajectory=[[pos1],[pos2],[pos3],......]

//trajectory=[[x1,y1],[x2,y2],[x3,y3],......]





const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var cLog
var gameState="onSling"
var score=0
function preload() {
  getBG();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     cLog=new Log(100,200,100,PI/2)
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 320, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    slingshot=new Slingshot(bird.body,{x:200,y:50})

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
        noStroke();
        textSize(35)
        fill("white")
        text("Score : "+score,width-300,50)
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    cLog.display();
    slingshot.display();
    
//chain2.display();
   
}
function mouseDragged(){
    if(gameState!=="launched"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }

    
   
}
function mouseReleased(){
    slingshot.fly()
    gameState="launched"
}
function keyPressed(){
    if(keyCode===32){
        //slingshot.attach(bird.body)
    }
}

async function getBG(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/America/New_York")
    var responseJSON=await response.json();
    //console.log(responseJSON.datetime)
    var hour=responseJSON.datetime.slice(11,13)
    console.log(hour)
    if(hour>=06&&hour<=18){
        backgroundImg=loadImage("sprites/bg.png")

    }
    else{
        backgroundImg=loadImage("sprites/bg2.jpg")  
    }
}