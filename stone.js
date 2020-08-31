class stone{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
            }
            this.body=Bodies.circle(this.image,x,y,15,options)
            this.radius = 15;
            this.image = loadImage("Sprites/stone.png")
    
            World.add(world,this.body)
        } 
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop()
     }
}