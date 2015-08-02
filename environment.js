var Environment = function (snake)  {
  this.el = document.getElementById('game-context'); 
  this.ctx = this.el.getContext('2d');
  this.width = this.el.width; 
  this.height = this.el.height; 
  this.plasma = false;
  this.objects = {}; 
  this.snake = snake;
  this.dimensions = [0,0,600,400];
  this.bullets = [];
  this.objectCount = 0;
  this.sprite = "/snake-sprite/1.jpg";
  this.snake.init();
  this.level = 1; 
  this.events = new Events();
};


Environment.prototype.renderObjects =  function () {
  var state = this;
  if(this.bullets.length > 0) {
    this.renderBullets();  
  }
  if(this.plasma) {
    this.plasma.draw();
  }
  
  if(this.objects) {
    _.each(this.objects, function(hash, key) {
      _.each(hash, function(obj, key) {
        if(obj && obj.type === 'apple') { 
          if(obj.ticks <= 0) { 
            state.objects[obj.x][obj.y] = null;
            state.objectCount -= 1;       
          } else {
            state.events.drawCircle(obj.x, obj.y, obj.r);  
            obj.ticks -= 1;
          }
        } 
      });
    });
  }
};

Environment.prototype.renderBullets  = function () {
  var ctx = Game.canvasContext;
  this.bullets.forEach(function(arr) {
    arr.forEach(function(bullet) {
      bullet.x += bullet.dx; 
      bullet.y += bullet.dy;
      ctx.fillStyle = bullet.color;
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });
  });
};
Environment.prototype.register = function (obj) {
  this.objects[obj.x] = this.objects[obj.x] ? this.objects[obj.x] : {};
  this.objects[obj.x][obj.y] = obj;
  this.objectCount += 1;
}

Environment.prototype.outOfBounds = function () { 
  var last = this.snake.positions[this.snake.last()];
  var vertical = (last.y >= this.dimensions[3] || last.y <= 0); 
  var horizontal = (last.x >= this.dimensions[2] || last.x <=0);
  return (vertical || horizontal || this.snake.suicide());
}

Environment.prototype.genPlasma = function () {
  var ctx = this.ctx;
  if(!this.plasma) {
    var p = new Plasma(ctx);  
    this.plasma = p;
  }  
}

Environment.prototype.plasmaCollide = function () {
  var pos = this.plasma.getPos();
  var off = $(this.el).offset();
  var y = pos.top - off.top;
  var x = pos.left - off.left;
  //true if left or right top corner in plasma
  var head = this.snake.positions[this.snake.last()];
  var deltaX = Math.abs(head.x - x);
  var deltaY = Math.abs(head.y - y);
  if(deltaX <= 100 && deltaY <= 80) this.snake.acquireLaser();
}

Environment.prototype.snakeFed = function () {
  var state = this;
  var eaten = false;
  _.each(this.objects, function(hash, key) {
    _.each(hash, function(obj, key) {
      if (obj && obj.type == 'apple') {
        eaten = state.snake.eatApple(obj);
        if(eaten) {
          state.objects[obj.x][obj.y] = null;
          state.objectCount -= 1;
        }
      }  
    });
  });
  return eaten;
}
