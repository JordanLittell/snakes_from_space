var Plasma = function (type, x ,y) {
  this.el = document.createElement('canvas');
  if (type=='red') {
    this.color = 'rgba(255, 100, 0, 0.5)';
  } else {
    this.color = 'rgba(0, 255, 255, 0.5)';
  }
  this.type = type;
  this.el.id = "plasma"
  this.context= this.el.getContext('2d');
  this.width = this.el.width = 100;
  this.height = this.el.height = 80;
  var state = this;
  document.body.appendChild(state.el)
  if(x && t) this.setPosition(x, y);
  this.t = 0;
}

Plasma.prototype.setPosition = function (x, y) {
  $('#plasma').css({
    top: y, 
    left: x
  });
}

Plasma.prototype.draw = function () {
  var t = this.t, 
  w = this.width, 
  h = this.height,
  d = Math.min(w, h) - 10,
  l = Math.round(d / 10),
  z = 15 - Math.sin(t) * 15 - Math.cos(t);
  this.context.fillStyle = 'rgba(0, 0, 0, 0.025)';
  this.context.fillRect(0, 0, w, h);
  for (var i = 0; i < l; i++) {
    var r = ((i * d / 2) / l) * Math.sin((z * 100) + i),
        x = Math.sin(i) * r + (w/2),
        y = Math.cos(i) * r + (h/2);
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.fillRect(x, y, 2, 2);
  }
  this.t += 0.00004;
}


Plasma.prototype.getPos = function () {
  return $(this.el).offset(); 
}