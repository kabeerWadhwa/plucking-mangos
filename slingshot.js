class slingshot{
    constructor(bodyA,bodyB){
        var options = {
            stiffness: 0.04,
            length: 14,
            bodyA:bodyA,
            bodyB:bodyB
        
        }
        this.sling = Constraint.create(options)

        World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA = null;
    }
    //display
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;
        strokeWeight(3);
        stroke(28,74,1)
        //creating the line
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}