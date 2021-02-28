class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.sling1=loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA=body
    }
    display(){
        image(this.sling1,200,20)
        image(this.sling2,172,20)
        if(this.sling.bodyA){
            push ()
            strokeWeight(4)
            var pointA=this.sling.bodyA.position
            
            var pointB=this.sling.pointB
            stroke(48,22,8)
    
            if(this.sling.bodyA.position.x<220){
                line(pointA.x-25,pointA.y+5,pointB.x-17,pointB.y+5)
                line(pointA.x-25,pointA.y+5,pointB.x+30,pointB.y+5)
                image(this.sling3,pointA.x-25,pointA.y-10,15,30)
            }
            else{
                line(pointA.x+20,pointA.y+5,pointB.x-17,pointB.y+5)
            line(pointA.x+20,pointA.y+5,pointB.x+30,pointB.y+5)
            image(this.sling3,pointA.x+20,pointA.y-10,15,30)
            }
            
            pop ()
        }
        
    }
}