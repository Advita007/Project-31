class Drops{
	constructor(x,y,r)
	{
		var options={
			//isStatic:true,
			restitution :0,
			friction :0.1,
			density:1.2,
			frictionAir:10
			}
		this.x=x;
		this.y=y;
        this.r=r
        this.image= loadImage("images/Drops.png")
		this.body=Bodies.circle(this.x, this.y, this.r+10, options)
		World.add(world, this.body);
	}

	display()
	{
		var dropPos=this.body.position;	
		push()
		translate(dropPos.x,dropPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		
	   fill("blue")
	   ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,this.r, this.r)
		
		pop()
		if(this.body.position.y > height){
			Matter.Body.setPosition(this.body,{x:random(0,600), y:random(0,600)})
		}
 }
}