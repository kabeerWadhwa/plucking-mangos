class mango{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution :0,
            friction :1
            }
            this.body=Bodies.circle(x,y,15,options)
            this.radius = 15;
            this.image = loadImage("Sprites/mango.png")
    
            World.add(world,this.body)
        } 
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(RADIUS)
        image(this.image,0,0,this.radius,this.radius)
        pop()
    }
}    