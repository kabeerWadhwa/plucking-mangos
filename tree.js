class tree{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution :0,
            friction :1,
            }
            this.body=Bodies.rectangle(this.image,x,y,width,height,options)
            this.width = width
            this.height = height
            this.image = loadImage("Sprites/tree.png")
    
            World.add(world,this.body)
        } 
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(RADIUS)
        rect(0,0,this.radius,this.radius)
        pop()
    }
}