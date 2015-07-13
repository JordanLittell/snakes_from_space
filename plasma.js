var Plasma = function (context) {
  this.image = new Image("/snake-sprite/1.jpg");
  var that = this;
  if($('#plasma')) {
    $('#plasma').remove();
  }
  $('body').append('<div id="plasma">')
  $('#plasma').css({
    position: 'absolute', 
    top: Math.random() * 400, 
    left: Math.random() * 400
  });  
}

Plasma.prototype.getPos = function () {
  return $('#plasma').offset();
}