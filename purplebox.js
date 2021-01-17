class PurpleBox{

    constructor(x, y){

        var options = {

            isStatic : false,
            'restitution' : 0,
            'friction' : 5,
            'density' : 0.1

        }
        
        this.body = Bodies.rectangle(x, y, 25, 50, options);
        this.width = 25;
        this.height = 50;

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("purple");
        rect(0, 0, this.width, this.height);
        pop();

    }

}