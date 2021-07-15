const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
    x: undefined,
    y:undefined
};

const colors = [
    'blue',
    'red',
    'green',
    'yellow',
    'orange'
];

class GalacticParticle {
    constructor(x, y, radius, color) {
        
    }

    draw() {
        c.beginPath();
        c.closePath();
    }

    update() { 
        this.draw();
    }
}

function init() {
    particles = []

    for (let i = 0; i < 200; i++) {
        var x = Math.random() * canvas.width
        var y = Math.random() * canvas.height
        var radius
        particles.push(new GalacticParticle())
    }

}
 
addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init()
})

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height)
}

init()
animate()
