function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.foodEaten = 0;
    this.tail = []; // stores coords of where snake is
    this.curDir = 'Right';
    // sets color and size of snake
    this.draw = function() {
        ctx.fillStyle = "#e76f51"; 
        for (let i= 0; i< this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale); 
        }
        ctx.fillRect(this.x, this.y, scale, scale); 
    }

    this.update = function() {

        for (let i = 0; i < this.tail.length-1; i++) {
            this.tail[i] = this.tail[i+1]; // moves coordinates of tail[i] to th eleft to make room for new tail coords
        }

        this.tail[this.foodEaten - 1] = {x: this.x, y: this.y} // adds new tail coordinates
 
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        
    }

    /**
     * This method changes direction based on input from keyboard.
     * If the direction is opposite of the direction the snake is currently going in, it will not change directions.
     * @param {Input from keyboard} direction 
     */
    this.changeDirection = function(direction) {
        switch(direction) {
            case 'Up':
                if (this.curDir == 'Down') {
                    break;
                }
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                this.curDir = 'Up';
                break;
            case 'Left':
                if (this.curDir == 'Right') {
                    break;
                }
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                this.curDir = 'Left';
                break;
            case 'Down':
                if (this.curDir == 'Up') {
                    break;
                }
                this.xSpeed = 0;
                this.ySpeed = scale * 1;  
                this.curDir = 'Down';
                break;      
            case 'Right':
                if (this.curDir == 'Left') {
                    break;
                }
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                this.curDir = 'Right';
                break;
        }
    }

    this.eat = function(food){
        if (this.x == food.x && this.y == food.y ) {
            this.foodEaten++;
            return true;
        }
        return false;
    }

    this.isDead = function() {
        // check if snake is out of bounds
        if (this.x > canvas.width) {
            return true;
        }
        if (this.y > canvas.height) {
            return true;
        }
        if (this.x < 0) {
            return true;
        }
        if (this.y < 0) {
            return true;
        }

        // check if snake hits itself
        for (let i= 0; i< this.tail.length; i++) {
            if (this.x == this.tail[i].x && this.y == this.tail[i].y) {
                return true;
            }
        }
    }
}