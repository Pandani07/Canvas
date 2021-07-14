var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//line

// c.beginPath();
// c.moveTo(200, 200);
// c.lineTo(400, 400);

//color
c.strokeStyle = "blue";
c.stroke();

//arc

var x = 100;
var y = 100;
var i = 0;
const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function drawcircle() {
  for (i = 0; i < 7; i++) {
    //   c.beginPath();
    //   c.arc(x, y, 50, 0, Math.PI * 2, false);
    //   c.stroke();
    c.fillStyle = "red";
    c.fillRect(x, y, 100, 100);

    x = x + 100;
    y = y + 100;
    await timer(1000);
  }
}

drawcircle();
