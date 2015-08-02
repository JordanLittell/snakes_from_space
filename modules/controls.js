var controls = (function () {

  var Bindings 
  var Combo;    
  var Key;

  var mod = {};
  
  mod.init = function () {
    Bindings = Keys.Bindings;
    Combo    = Keys.Combo;
    Key      = Keys.Key;
    var state = this;
    this.bindings = new Bindings();  

    this.controls = {
      up : new Combo(Key.W),
      left : new Combo(Key.A),
      right : new Combo(Key.D),
      down : new Combo(Key.S),
      space: new Combo(Key.Spacebar)
    };

    Object.keys(mod.controls).forEach(function(control) {
      var control = String(control);
      state.addBinding(control);
    });

  };

  mod.reset = function () {
    if(this.bindings) delete this.bindings;
    Bindings = Keys.Bindings;
    Combo    = Keys.Combo;
    Key      = Keys.Key;

    this.bindings = new Bindings();

    this.controls = {
      up : new Combo(Key.W),
      left : new Combo(Key.A),
      right : new Combo(Key.D),
      down : new Combo(Key.S),
      space: new Combo(Key.Spacebar)
    };

    Object.keys(this.controls).forEach(function(control) {
      var control = String(control);
      mod.addBinding(control);
    });
  }

  //configure bindings: 
  mod.addBinding = function (dir) {
    //funs will be up, right, left, down
    this.bindings.add(dir, mod.controls[dir]);
  }

  mod.add = function (name, fn) {
    this.bindings.registerHandler(name, fn);
  }

  mod.init();
  return mod;
})();