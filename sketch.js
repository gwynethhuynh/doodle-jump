let doodler;
let score = 0;
let gap;
let bg;
let doodlerLeft;
let doodlerRight;
let platforms = []; // Create empty platform array
function setup() {
    createCanvas(400, 600);
    

    // Create the platforms
    let platformCount = 6;
    gap = height / platformCount;
    for (let i = 1; i < 6; i++) {
        platforms.push(new Platform(random(width), height - i*gap))
    }
    bg = loadImage('images/background.png');
    doodlerLeft = loadImage('images/doodler-left.png');
    doodlerRight = loadImage('images/doodler-right.png')
    doodler = new Doodler(doodlerLeft, doodlerRight);
}

function draw() {
    background(bg, 100, 255);
    translate(0, width / 2 - doodler.y);
    doodler.draw();
    doodler.update(platforms);

    push();
    fill(0)
    textSize(30);
    textAlign(CENTER);
    text(score, width / 2, doodler.y - 150);
    pop();

    // draw our new platforms
    for (let platform of platforms) {
        platform.draw();
    }

    // Create more platforms as the doodler moves up the screen
    if (doodler.y < platforms[platforms.length - 1].y + 200) {
        platforms.push(new Platform(random(width), platforms[platforms.length - 1].y - gap));
    }
    if (platforms[0].y > doodler.y + 400) {
        platforms.splice(0, 1);
        score++;
      }
}

function keyPressed() {
    if (key == ' ') {
        doodler.jump();
    }
}