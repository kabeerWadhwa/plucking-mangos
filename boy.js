class boy{
    constructor(x,y,width,height){
        var Options = {
            isStatic:true
                }
        this.body=Bodies.rectangle(x,y,width,height,Options)
        this.width = width
        this.height = height
        this.image = loadImage("Sprites/boy.png")
        World.add(world,this.body)
            }
    display(){
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}