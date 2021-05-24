class Connect{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.4,
            length:100
        }
        this.Connect= Constraint.create(options);
        World.add(world,this.Connect)
    }display(){

        var pointA = this.Connect.bodyA.position;
        var pointB = this.Connect.bodyB.position;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}