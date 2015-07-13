var controls = (function () {

  var Bindings = Keys.Bindings;
  var Combo    = Keys.Combo;
  var Key      = Keys.Key;

  var mod = {};
  mod.bindings = new Bindings();
  
  //controls are here 
  mod.controls = {
    up : new Combo(Key.W),
    left : new Combo(Key.A),
    right : new Combo(Key.D),
    down : new Combo(Key.S),
    space: new Combo(Key.Spacebar)
  }

  //configure bindings: 
  mod.addBinding = function (dir) {
    //funs will be up, right, left, down
    this.bindings.add(dir, mod.controls[dir]);
  }

  Object.keys(mod.controls).forEach(function(control) {
    var control = String(control);
    mod.addBinding(control);
  });

  mod.add = function (name, fn) {
    mod.bindings.registerHandler(name, fn);
  }

  return mod;
})();