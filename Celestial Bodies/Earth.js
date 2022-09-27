class Earth {
  constructor(x, y, velocity, radian) {
    this.x = x;
    this.y = y;
    this.startx=x;
    this.starty=y;
    this.velocity = velocity;
this.radian =0;
    this.radius = 16;
    this.color = "blue";

    this.moon={
        x:this.x+20+this.radius,
        y,
        radian:0,
        velocity:(Math.random()+0.1)/20
    }
  }

  draw() {
     
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.shadowColor = this.color;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();

    if(this.velocity>0){
        c.beginPath();
        c.arc(this.moon.x, this.moon.y, 5, 0, Math.PI*2, false);
        c.fillStyle='white';
        c.fill();
    }
  }

  update() {
    this.draw();
    if(this.velocity>0){
        this.radian+=this.velocity;

        this.moon.radian+=this.moon.velocity
        this.moon.x=this.x+Math.cos(this.moon.radian)*(this.radius+5);
        this.moon.y = this.y+Math.cos(this.radian)*(this.radius+5)

        this.x = this.startx+Math.cos(this.radian)*125;
        this.y = this.starty+Math.sin(this.radian)*125;

    }
   
  }
}
