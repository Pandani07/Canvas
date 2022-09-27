const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth/2,
  y: innerHeight/2,
};

const _2PI = 2.0*Math.PI;

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

addEventListener('resize', ()=>{
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

let mousedown = false;

addEventListener('mousedown', ()=>{
  mousedown=true
});
addEventListener('mouseup', ()=>{
  mousedown=false
});

let particles;

function init() {
  particles = [];

  for (let i = 0; i < 400; i++) {
    const canWidth = canvas.width+300;
    const canHeight = canvas.height+300;

    const x = Math.random()*canWidth - canWidth/2;
    const y = Math.random()*canHeight - canHeight/2;
    const radius = Math.random() * 2;

    const color = colors[Math.floor(Math.random()*colors.length)]

    particles.push(new GalacticParticle(x, y, radius, color));
  }

  console.log(particles);
}

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

let rot_angle = 0;
let alpha = 1;
let angle = 0;

let earthx =170;
let earthy = 170;


function animate() {

  const count = 100;
  requestAnimationFrame(animate);
  c.fillStyle = `rgba(10, 10, 10, ${alpha})`
  c.fillRect(0, 0, canvas.width, canvas.height);
  
  c.fill();
  c.closePath();
  
  c.save();
  c.translate(canvas.width/2, canvas.height/2);
  c.rotate(rot_angle);

  particles.forEach(element => {
    element.update();
  });

  var earth = new Earth(earthx, earthy, 3);
  earth.update();
  
  angle +=0.06
  c.restore();
  rot_angle+=0.001;

  if(mousedown&&alpha>=0.1 ){
    alpha -=0.01;
  }
  else if(!mousedown && alpha<1){
    alpha+=0.01
  }

  var sun = new Sun(canvas.width/2, canvas.height/2);
  sun.update();
  sun.orbit();

}

init();
animate();
