class Rain {
    constructor(x, y){
        var options = {
            friction : 0.1,
            isStatic: false
        }
        this.rain = Bodies.circle(x,y,5,options);
        World.add(world, this.rain)
    }
    display(){
        var pos = this.rain.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}