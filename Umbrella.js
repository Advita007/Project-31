class Umbrella{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
			friction :0.1,
			density:1.2
			}
		this.x=x;
		this.y=y;
        this.r=r
        this.image= loadImage("images/Walking Frame/walking_1.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var umbrellaPos=this.body.position;	
		push()
		translate(umbrellaPos.x,umbrellaPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		
		pop()
		
 }
}