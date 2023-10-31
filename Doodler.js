class Doodler {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.height = 60;
        this.width = 60;
    }

    draw() {
        rect(this.x, this.y, this.width, this.height);
    }
}