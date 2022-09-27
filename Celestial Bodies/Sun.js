class Sun {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 50;
    this.color = "#f9d71f";
  }

  draw() {

    c.beginPath();
    c.lineWidth=2;
    c.arc(this.x, this.y, 241, 0, Math.PI*2, false)
    c.strokeStyle='rgba(255,255,255,0.35)'
    c.stroke();
    c.closePath();

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "orange";
    c.fillStyle = "#f9d71f";
    c.fill();
    c.shadowColor = "red";
    c.closePath();
  }

  update() {
    this.draw();
  }

  orbit(){
      
  }
}
