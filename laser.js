function Laser (mount) {
  this.mount = mount;
  //set expiration of the laser 
  var start = new Date();
  start.setSeconds(start.getSeconds() + 30);
  this.expire = start;
  this.moment = new Date();
  this.duration = this.expire - this.moment;
  this.displayTime();
}

Laser.prototype.updateTime = function () {
  this.moment = new Date();
  this.displayTime();  
  this.duration = this.expire - this.moment;
}

Laser.prototype.displayTime = function () {
  Game.canvasContext.font = "14px sans serif";
  var timeString = String(this.duration).split(''); 
  timeString = timeString
  .slice(0,2)
  .concat([':'])
  .concat(timeString.slice(3, 5))
  .join('');
  var output = "Laser limit: " + timeString;
  Game.canvasContext.fillText(output, Game.width - 150, 40);
}

Laser.prototype.shoot = function () {
  var dir = this.mount.dir;
  switch(dir) {
    case 'down': 
    this.fireDown();
    break; 
    case 'up': 
    this.fireUp();
    break; 
    case 'left': 
    this.fireLeft();
    break; 
    case 'right': 
    this.fireRight(); 
    break;
  }
};

Laser.prototype.fireLeft = function () {
  var top = this.mount.y; 
  var left = this.mount.x; 
  var bottom  = top + 8;
  var xoffset = 20;
  var topBullet = Game.canvasContext.fillRect(left - xoffset, top, 10, 2);
  var bottomBullet = Game.canvasContext.fillRect(left - xoffset, bottom, 10, 2);
  var bullets = [{
      x: left-xoffset, 
      y: top,
      color: '#1E90FF', 
      dx: -20, 
      dy: 0,
      width: 10, 
      height: 2
    }, {
      x: left - xoffset, 
      y : bottom, 
      color: '#1E90FF',
      dx: -20, 
      dy: 0,
      width: 10, 
      height: 2}]; 
  Game.env.bullets.push(bullets);
};

Laser.prototype.fireRight = function () {
  var top = this.mount.y; 
  var left = this.mount.x; 
  var bottom  = top + 8;
  var xoffset = 20;
  var topBullet = Game.canvasContext.fillRect(left + xoffset, top, 10, 2);
  var bottomBullet = Game.canvasContext.fillRect(left + xoffset, bottom, 10, 2);
  var bullets = [{
      x: left + xoffset, 
      y: top,
      color: '#1E90FF', 
      dx: 20, 
      dy: 0,
      width: 10, 
      height: 2
    }, {
      x: left + xoffset, 
      y : bottom, 
      color: '#1E90FF',
      dx: 20, 
      dy: 0,
      width: 10, 
      height: 2}]; 
  Game.env.bullets.push(bullets);
}

Laser.prototype.fireUp = function () {
  var top = this.mount.y; 
  var left = this.mount.x; 
  var right = this.mount.x + 8;
  var bottom  = top + 8;
  var yoffset = 20;
  var topBullet = Game.canvasContext.fillRect(left, top - yoffset, 2, 10);
  var bottomBullet = Game.canvasContext.fillRect(left, bottom - yoffset, 2, 10);
  var bullets = [{
      x: left, 
      y: top - yoffset,
      color: '#1E90FF', 
      dx: 0, 
      dy: -20,
      width: 2, 
      height: 10
    }, {
      x: right, 
      y : top - yoffset, 
      color: '#1E90FF',
      dx: 0, 
      dy: -20,
      width: 2, 
      height: 10}]; 
  Game.env.bullets.push(bullets);
}

Laser.prototype.fireDown = function () {
  var top = this.mount.y; 
  var left = this.mount.x; 
  var right = this.mount.x + 8;
  var bottom  = top + 8;
  var yoffset = 20;
  var topBullet = Game.canvasContext.fillRect(left , top + yoffset, 2, 10);
  var bottomBullet = Game.canvasContext.fillRect(left , bottom + yoffset, 2, 10);
  var bullets = [{
      x: left, 
      y: bottom - yoffset,
      color: '#1E90FF', 
      dx: 0, 
      dy: 30,
      width: 2, 
      height: 10
    }, {
      x: right , 
      y : bottom - yoffset, 
      color: '#1E90FF',
      dx: 0, 
      dy: 30,
      width: 2, 
      height: 10}]; 
  Game.env.bullets.push(bullets);
  
}
