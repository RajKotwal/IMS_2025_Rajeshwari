let balls = []; // Array to store ball objects

function setup() {
  createCanvas(400, 400);
  
  // Create multiple balls
  for (let i = 0; i < 30; i++) {
    balls.push({
      x: random(width),       // Random x position
      y: random(height),      // Random y position
      xSpeed: random(-3, 3),  // Random horizontal speed
      ySpeed: random(-3, 3),  // Random vertical speed
      diameter: random(20, 50), // Random size
      color: [random(255), random(255), random(255)] // Random color
    });
  }
}

function draw() {
  background(0); 
  
  // Update and display each ball
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    
    // Move the ball
    ball.x += ball.xSpeed;
    ball.y += ball.ySpeed;
    
    // Bounce the ball off the edges
    if (ball.x < 0 || ball.x > width) {
      ball.xSpeed *= -1;
    }
    if (ball.y < 0 || ball.y > height) {
      ball.ySpeed *= -1;
    }
    
    // Draw the ball
    fill(ball.color);
    ellipse(ball.x, ball.y, ball.diameter);
  }
}
