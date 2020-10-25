const canvas = document.querySelector(".canvas"); //gets canvas from html file
const ctx= canvas.getContext("2d");
const scale = 15;
const rows = canvas.height / scale // get rows within canvas
const columns = canvas.width / scale // get columns within canvas
var snake;
this.gameOver = false;




/**
 * calls itself
 * initializes snake and details snake behavior
 */
(function setup() {
    snake = new Snake();
    food = new Food();
    food.pickLocation();


    // repeatedly clear, update, and draw new snake
    window.setInterval(() => {
        if (snake.isDead()) {
            if(confirm('GG. Press OK to restart.')) {
                window.location = '/';
            }
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        food.draw();
        snake.update();
        snake.draw();

        if (snake.eat(food)) {
            food.pickLocation();
        }
        // the snake is drawn after the fruit so that the fruit is covered by the snake if they are in the same spot
    }, 50); // 20 times a second (every 50 ms)
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', ''); // makes 'up' correspond to the up key, as opposed to 'Arrow up'
    snake.changeDirection(direction);
}))
