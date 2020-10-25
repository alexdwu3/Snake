function Food() {
    this.x;
    this.y;
    
    // picks a random location for the food
    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function() {
        ctx.fillStyle = "#e9c46a";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}