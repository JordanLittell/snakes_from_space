"use strict"; 
var Snake = function () {
  var el = document.getElementById('game-context'); 
  this.context = el.getContext('2d'); 
  this.length = 4; 
  this.lives = 4; 
  this.appleCount = 0;
  this.squareDim = 10;
  this.positions = []; 
  this.startx = el.height/2; 
  this.starty = el.width/2;
  this.context.fillStyle = "#00FF99";
}
Snake.prototype.acquireLaser = function () {
  this.plasmaMode = true; 
  var head = this.positions[this.last()];
  this.laser = new Laser(head);
}

Snake.prototype.checkLaser = function () {
  if(!this.laser) {return }
  if (this.laser.moment <= this.laser.expiration) {
    this.laser = null;
  } else {
    this.laser.updateTime();
    var state = this;
  }
}

Snake.prototype.eatApple = function (obj) {
  var head = this.positions[this.last()];
  //head intersects with the circle
  var veryBottom = head.y + 10;
  var veryTop = head.y;
  var veryLeft = head.x; 
  var veryRight = head.x + 10; 
  var yInt1 = (-veryTop + (obj.y + obj.r) >= 0) && (veryTop - (obj.y - obj.r) >= 0);
  var yInt2 = (-veryBottom + (obj.y + obj.r) >= 0) && (veryBottom - (obj.y - obj.r) >= 0);
  var xInt1 = (obj.x - obj.r <= veryRight) &&  (veryRight <= obj.x + obj.r);
  var xInt2 = (obj.x - obj.r <= veryLeft) &&  (veryLeft <= obj.x + obj.r);
  if((xInt1 || xInt2)&& (yInt1||yInt2)) {
    this.appleCount += 1;
    this.grow();  
    return true;
  }
  return false;
}

Snake.prototype.moveConflict = function(pos1, pos2) {
    if (!pos2) return;
    var leftC = pos1.dir == 'left' && pos2.dir == 'right';
    var rightC = pos1.dir == 'right' && pos2.dir == 'left';
    var topC = pos1.dir == 'up' && pos2.dir == 'down';
    var bottomC = pos1.dir == 'down' && pos2.dir == 'up';
    return leftC || rightC || topC || bottomC;
}

Snake.prototype.move = function () {
  for(var i = this.positions.length - 1; i >= 0; i--) {
    var positions = this.positions;
    if(this.moveConflict(positions[i], positions[i-1])) {
      positions[i].dir = positions[i-1].dir;
    }
    if(i === this.last()) { 
      positions[i].nextDir = positions[i].dir;
    }
    if(i > 0 && (positions[i].dir !== positions[i-1].dir))  {
      positions[i-1].nextDir = positions[i].dir;
    }
    
    switch (positions[i].dir){
      case 'up': 
        positions[i].y -= 15;
      break; 
      case 'down':
        positions[i].y += 15;
      break; 
      case 'left':
        positions[i].x -= 15;
      break; 
      case 'right':
        positions[i].x += 15
      break; 
      default: 
        positions[i].y -= 15;
      break;   
    }
    var pos = positions[i]
    this.drawNode(pos.x, pos.y, pos.width, pos.height); 
    if(positions[i].nextDir) {
      positions[i].dir = positions[i].nextDir;
    }
  }
  this.checkLaser();
}

Snake.prototype.drawNode = function (x, y, width, height) {
  var fs = this.plasmaMode ? "#1E90FF" : "#00FF99";
  this.context.fillStyle = fs;
  this.context.fillRect(x, y, width, height); 
}

Snake.prototype.init = function () {
  var x = this.startx; 
  var y = this.starty; 
  var delta = this.squareDim; 
  for (var i = 0; i < this.length; i++) {
    this.drawNode(x, y, delta, delta);   
    this.positions.push({
      x: x, 
      y: y, 
      width: delta, 
      height: delta, 
      dir: 'up', 
      nextDir: 'up'
    });
    y = y - delta - 5; 
  }
}

Snake.prototype.last = function () {
  return (this.positions.length -1); 
}

Snake.prototype.up = function () {
  var lastIdx = this.last();
  this.positions[lastIdx].dir = 'up';
}

Snake.prototype.down = function () {
  var lastIdx = this.last();
  this.positions[lastIdx].dir = 'down';
}

Snake.prototype.left = function () {
  var lastIdx = this.last();
  this.positions[lastIdx].dir = 'left';
}

Snake.prototype.right = function () {
  var lastIdx = this.last();
  this.positions[lastIdx].dir = 'right';
}

Snake.prototype.getHead = function () {
  return this.positions[this.last()];
}

Snake.prototype.suicide = function () {
  var lastIdx = this.last(); 
  var head = this.positions[lastIdx];

  for(var i = lastIdx - 1; i >= 0; i--) {
      var pos = this.positions[i];
      var vertical = (pos.x === head.x);
      var horizontal = (pos.y === head.y);
      if(vertical && horizontal) return true;
  }
  return false;
}

Snake.prototype.addNode = function (tail, dir) {
  var x = tail.x; 
  var y = tail.y;
  switch(dir) {
    case 'right':
      x = tail.x - 15;
      break; 
    case 'left': 
      x = tail.x + 15;
      break;
    case 'bottom':      
      y = tail.y - 15;
      break; 
    case 'top': 
      y = tail.y + 15;
      break; 
  }
  return  {
    x: x, 
    y: y, 
    width: 10, 
    height: 10, 
    dir: tail.dir, 
    nextDir: tail.nextDir
  }
}

Snake.prototype.grow = function () {
  var head = this.getHead();
  var tail = this.positions[0];
  if(tail.dir === 'up') {
    var node = this.addNode(tail, 'top');
  }
  if(tail.dir === 'down') {
    var node = this.addNode(tail, 'bottom');
  }
  if(tail.dir === 'left') {
    var node = this.addNode(tail, 'left');
  }
  if(tail.dir === 'right') {
    var node = this.addNode(tail, 'right');
  }
  this.positions.unshift(node);
}
