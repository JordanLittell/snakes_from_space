function Events (env) {
  var el = document.getElementById('game-context'); 
  this.context = el.getContext('2d'); 
  this.env = env;
}

Events.prototype.randVec = function () {
  var posx = parseInt(Math.random() * this.env.width); 
  var posy = parseInt(Math.random() * this.env.height); 
  return {x: posx, y: posy};
}

Events.prototype.drawCircle = function (x, y , r) {
  this.context.beginPath();
  this.context.arc(x, y, r, 0, 2 * Math.PI, false);
  this.context.fillStyle = 'red';
  this.context.fill();
  this.context.stroke();
}

Events.prototype.drawEnergy =function () {
  var vec = this.randVec();
  var radius = 10;
  var plasma = new Plasma('red', vec.x, vec.y);
  return plasma;
}

Events.prototype.drawApple =function () {
  var vec = this.randVec();
  var radius = 10;
  this.drawCircle(vec.x, vec.y, radius);
  return {r: radius, x: vec.x, y: vec.y, ticks: Math.round(Math.random() * 100) + 50, type: 'apple'};
}