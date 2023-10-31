let doodler;
function setup() {
    createCanvas(400, 600);
    doodler = new Doodler();
}

function draw() {
    background(100, 100, 255);
    doodler.draw();
    doodler.update();
}

function keyPressed() {
    if (key == ' ') {
        doodler.jump();
    }
}