var Game = function () {
  var el = document.getElementById('game-context');
  this.objectCount = 0;  
  this.width = 600;
  this.height = 400;
  this.dimensions = [0,0,600,400];
  this.context = el.getContext('2d');
  this.context.fillStyle = "black";
  this.context.fillRect.apply(this.context, this.dimensions);
}
Game.width = 600; 
Game.height = 400;

Game.prototype.clear = function () {
  this.context.clearRect.apply(this.context, this.dimensions);  
}

Game.prototype.draw = function () {
  var state = this;
  this.clear(); 
  this.context.fillStyle = "black";
  this.context.fillRect.apply(this.context, this.dimensions);
  this.env.renderObjects();
}

Game.prototype.addBindings = function () {
  var g = this;
  var up = function () {
    g.env.snake.up();
  };

  var down = function () {
    g.env.snake.down();
  };

  var left = function () {
    g.env.snake.left();
  };

  var right = function () {
    g.env.snake.right();
  };

  var shoot = function () {
    if(!g.env.snake.laser) return;
    g.env.snake.laser.shoot();
  }

  controls.add('up', up);
  controls.add('down', down);
  controls.add('left', left);
  controls.add('right', right);
  controls.add('space', shoot);
}

Game.prototype.step = function () {
    this.count += 0.1;
    Game.count += 0.1;
}

Game.prototype.animate = function () {
  var state = this;
  this.draw();
  this.step();
  if(!this.env.plasma) this.env.genPlasma();

  if (this.env.objectCount < 10) {
    var apple = this.events.drawApple();
    this.env.register(apple);
  }

  if(this.env.outOfBounds()) {
    this.fail();
  }

  var obj = this.env.snakeFed();
  
  if(obj){
    state.draw();
  }

  this.env.plasmaCollide();
  this.env.snake.move();  
}

Game.prototype.init = function () {
  var state = this;
  if(this.gLoopId)
    window.clearInterval(this.gLoopId);
  var snake = new Snake();
  this.env = new Environment(snake);  
  //add variables to game namespace
  Game.env = this.env;
  Game.canvasContext = document.getElementById('game-context').getContext('2d');
  Game.count = 0;
  this.events = new Events(this.env);
  this.addBindings();
  this.count = 0;
  this.gLoopId = setInterval(state.animate.bind(this), 60);
}

Game.prototype.stop = function () {
  window.clearInterval(this.gLoopId);
  this.init();
}

Game.prototype.gameOver = function () {
  this.clear();
  this.context.fillStyle = "black";
  this.context.fillRect.apply(this.context, this.dimensions);
  this.context.fillStyle = "Red";
  this.context.font = "50px serif";
  this.context.fillText("Game Over!", 100, 100, 400); 
};

Game.prototype.fail = function () {
  window.clearInterval(this.gLoopId);
  g = null; 
  this.gameOver();
}
