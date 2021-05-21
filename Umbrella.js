class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        this.batmanImg = loadImage("Walking Frame/batman.png");
        World.add(world, this.umbrella)
        //load Image for BestMan
        
        if(frameCount >= 200){
            this.image(this.batmanImg, pos.x, pos.y + 70, 200, 300)
        }
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
        this.batmanImg
    }
}
