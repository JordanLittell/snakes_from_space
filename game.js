var Game = function (el) {
  var el = el;
  this.objectCount = 0;
  this.env = null; 
  this.width = 600;
  this.height = 400;
  this.dimensions = [0,0,600,400];
  this.context = el.getContext('2d');
  this.context.fillStyle = "black";
  this.context.fillRect.apply(this.context, this.dimensions);
  this.time = new Date();
  this.init();
}

Game.width = 600; 
Game.height = 400;

Game.prototype.clear = function () {
  this.context.clearRect.apply(this.context, this.dimensions);  
}

Game.prototype.kill = function () {
  this.env.snake = null; 
  if(this.env.snake.laser) {
    this.env.snake.laser = null;
  }
  this.env = null;
  delete this;
}

Game.prototype.draw = function () {
  var state = this;
  this.clear(); 
  this.context.fillStyle = "black";
  this.context.fillRect.apply(this.context, this.dimensions);
  this.env.renderObjects();
}

Game.prototype.addBindings = function (env) {
  //old bindings are still alive 
  var up = function () {
    env.snake.up();
  };

  var down = function () {
    env.snake.down();
  };

  var left = function () {
    env.snake.left();
  };

  var right = function () {
    env.snake.right();
  };

  var space = function () {
    if(!Game.env.snake.laser) return;
    Game.env.snake.laser.shoot();
  };

  controls.add('up', up);
  controls.add('down', down);
  controls.add('left', left);
  controls.add('right', right);
  controls.add('space', space);
}

Game.prototype.step = function () {
    this.count += 0.1;
    Game.count += 0.1;
}

Game.prototype.animate = function () {
  var state = this;
  this.draw();
  this.step();
  Game.time = new Date();
  if(this.env.outOfBounds()) {
    this.gameOver();
    return;
  }
  if(Game.time >= this.env.nextPlasma) this.env.genPlasma();

  if (this.env.objectCount < 1) {
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
  var snake = new Snake();
  this.env = new Environment(snake);  
  //add variables to game namespace
  Game.env = this.env;
  Game.canvasContext = document.getElementById('game-context').getContext('2d');
  Game.count = 0;
  this.events = new Events(this.env);
  controls.reset();
  this.addBindings(state.env);
  this.count = 0;
  this.gLoopId = setInterval(state.animate.bind(this), 60);
}

Game.prototype.stop = function () {
  window.clearInterval(this.gLoopId);
  this.init();
}

Game.prototype.gameOver = function () {
  var state = this;
  window.clearInterval(state.gLoopId);
  this.env = null 
  this.snake = null;
  this.clear();
  this.context.fillStyle = "black";
  this.context.fillRect.apply(this.context, this.dimensions);
  this.context.fillStyle = "Red";  
  this.context.font = "50px sans-serif";
  this.context.fillText("Game Over!", 100, 100, 400); 
};

Game.prototype.fail = function () {
  window.clearInterval(this.gLoopId);
  this.gameOver();
}