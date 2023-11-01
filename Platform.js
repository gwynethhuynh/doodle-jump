class Platform {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.height = 15;
        this.width = 60;
        this.image = loadImage('images/platform.png');

    }

    draw() {
        fill(100, 255, 100);
        // rect(this.x, this.y, this.width, this.height);
        image(this.image,this.x,this.y, this.width, this.height);
    }
}