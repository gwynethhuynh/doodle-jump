class Doodler {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.height = 60;
        this.width = 60;

        this.velocity = 0;
        this.gravity = 0.1;
        this.jumpForce = 8;
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 4;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += 4;
        }

    }

    jump() {
        this.velocity -= this.jumpForce;
    }
}