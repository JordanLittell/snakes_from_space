(function(l,h,v){"object"===typeof exports?exports=h(exports,"undefined"!==typeof window?window:"undefined"!==typeof global?global:{}):"function"===typeof define?define(function(){return h({},l)}):l.Keys=h(l.Keys,window)})(this,function(l,h,v){function w(){for(var a=Array.prototype.slice.call(arguments),b=0;b<a.length;b++)if(null!==a[b]&&"undefined"===typeof a[b])return!1;return!0}function x(a,b,c){(!c||l.debug)&&a.slice().forEach(function(a){b.call(null,a)});return a}function y(a){var b=Array.prototype.slice.call(arguments,
1);return a.map(function(a,e){for(var d=[],g=0;g<b.length;g++){var m=b[g]&&b[g][e];d.push(null!==m&&"undefined"!==typeof m?m:null)}return[a].concat(d)})}function q(a,b){for(var c=0;c<a.length;c++)if(b(a[c]))return a[c];return null}function d(a,b){this.name=a;this.code=b;d.internals.keymap[a]=d.internals.keymap[a]||b}function f(a,b){function c(a,b){return null!==q(a,function(a){return b.eq(a)})}var e=null;if(2===arguments.length&&b instanceof Array)e=b;else if(2<=arguments.length)e=Array.prototype.slice.call(arguments,
1);else{if(1===arguments.length){this.key=a;this.ctrl=a.eq(d.CTRL);this.shift=a.eq(d.SHIFT);this.alt=a.eq(d.ALT);this.meta=a.eq(d.META)||a.eq(d.META_RIGHT);return}throw Error("Combo: Invalid number of arguments provided.");}if(q(e,function(a){switch(a.code){case d.CTRL.code:case d.SHIFT.code:case d.ALT.code:case d.META.code:case d.META_RIGHT.code:return!1;default:return!0}}))throw Error("Combo: Attempted to create a Combo with multiple non-meta Keys. This is not supported.");this.key=a;this.ctrl=
c(e,d.CTRL)||a.eq(d.CTRL);this.shift=c(e,d.SHIFT)||a.eq(d.SHIFT);this.alt=c(e,d.ALT)||a.eq(d.ALT);this.meta=(this.meta=c(e,d.META)||c(e,d.META_RIGHT))||a.eq(d.META)||a.eq(d.META_RIGHT)}function s(a){if(!a||!(a instanceof Array))a=[!1,!1,!1,!1];return y(d.metaKeys,a).filter(function(a){return!0===a[1]}).map(function(a){return a[0]})}function k(){this.bindings=[];this.handlers=[];this.enable()}l=l||{};l.debug=!1;Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;return function(){var c=
Array.prototype.slice.call(arguments);return b.apply(a,c)}});var u=Function.prototype.bind;Array.prototype.forEach||(Array.prototype.forEach=function(a,b){if(!this)throw Error("forEach: Array is null or undefined.");if("function"!==typeof a)throw Error("forEach: Iterator is not callable.");var c=this.length>>>0,e=0;for(b=b||null;e<c;)Object.prototype.hasOwnProperty.call(this,e)&&a.call(b,this[e],e,this),e++});Array.prototype.map||(Array.prototype.map=function(a){var b=[];this.forEach(function(c,e,
d){b.push(a.call(null,c,e,d))});return b});Array.prototype.filter||(Array.prototype.filter=function(a,b){if("function"!==typeof a)throw Error("Predicate is not callable.");var c=[];this.forEach(function(e,d,g){a.call(b,e,d,g)&&c.push(e)});return c});Array.prototype.indexOf||(Array.prototype.indexOf=function(a){if(null===this)throw new TypeError;var b=Object(this),c=b.length>>>0;if(0===c)return-1;var e=0;0<arguments.length&&(e=Number(arguments[1]),e!=e?e=0:0!==e&&(Infinity!=e&&-Infinity!=e)&&(e=(0<
e||-1)*Math.floor(Math.abs(e))));if(e>=c)return-1;for(e=0<=e?e:Math.max(c-Math.abs(e),0);e<c;e++)if(e in b&&b[e]===a)return e;return-1});var p=function(){var a=console?u.call(console.log,console):Function.prototype.valueOf();return function(){if(l.debug){var b=Array.prototype.slice.call(arguments);a.apply(null,b)}}}(),r=function(){var a=console?u.call(console.warn,console):Function.prototype.valueOf();return function(){var b=Array.prototype.slice.call(arguments);a.apply(null,b)}}();d.internals={};
d.internals.keymap={A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,"Numpad 0":96,"Numpad 1":97,"Numpad 2":98,"Numpad 3":99,"Numpad 4":100,"Numpad 5":101,"Numpad 6":102,"Numpad 7":103,"Numpad 8":104,"Numpad 9":105,Multiply:106,Add:107,Subtract:109,Decimal:110,Divide:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F11:122,F12:123,F13:124,F14:125,F15:126,
Backspace:8,Tab:9,Enter:13,SHIFT:16,CTRL:17,ALT:18,META:91,META_RIGHT:93,"Caps Lock":20,Esc:27,Spacebar:32,"Page Up":33,"Page Down":34,End:35,Home:36,Left:37,Up:38,Right:39,Down:40,Insert:45,Delete:46,"Num Lock":144,ScrLk:145,"Pause/Break":19,"; :":186,"= +":187,",":188,"- _":189,".":190,"/ ?":191,"` ~":192,"[ {":219,"\\ |":220,"] }":221,"\" '":222};for(var t in d.internals.keymap)d[t]=new d(t,d.internals.keymap[t]);d.metaKeys=[d.CTRL,d.ALT,d.SHIFT,d.META];d.fromName=function(a){var b=d[a];if(b&&
b instanceof d)return b;for(var c in d.internals.keymap)if(c.toLowerCase()===a.toLowerCase())return d[c]instanceof d?d[c]:null;return null};d.fromCode=function(a){for(var b in d.internals.keymap)if(d.internals.keymap[b]===a)return d[b];return null};d.fromEvent=function(a){return d.fromCode(a.which)};d.prototype.isPressed=function(a){return this.code===a};d.prototype.isMeta=function(){switch(this.code){case d.CTRL.code:case d.SHIFT.code:case d.ALT.code:case d.META.code:case d.META_RIGHT.code:return!0;
default:return!1}};d.prototype.eq=function(a){return this.code===a.code&&this.name===a.name};l.Key=d;f.prototype.toString=function(){var a=(this.ctrl?"CTRL+":"")+(this.alt?"ALT+":"")+(this.shift?"SHIFT+":"")+(this.meta?"META+":"");if(this.key.isMeta()){var b;b=a.length-1===a.lastIndexOf("+")?!0:!1;return b?a.slice(0,a.length-1):a}return a+(this.key&&this.key.name?this.key.name:"")};f.prototype.serialize=function(){if("undefined"===typeof JSON)throw Error("Your browser does not currently support JSON serialization.");
return JSON.stringify(this)};f.deserialize=function(a){if("undefined"===typeof JSON)throw Error("Your browser does not currently support JSON deserialization.");if(!a)return null;a=JSON.parse(a);return f.fromObject(a)};f.prototype.clone=function(){return f.fromObject({key:this.key,ctrl:this.ctrl,alt:this.alt,shift:this.shift,meta:this.meta})};f.fromObject=function(a){if(!a||!a.key||!a.key.name||!a.key.code)throw Error("Combo.fromObject: Invalid Combo object provided.");var b=new d(a.key.name,a.key.code);
a=s([a.ctrl,a.alt,a.shift,a.meta]);return a.length?new f(b,a):new f(b)};f.fromEvent=function(a){if(!a||!a.which&&!a.keyCode)return null;var b=d.fromCode(a.which||a.keyCode);if(!b)return null;a=s([a.ctrlKey,a.altKey,a.shiftKey,a.metaKey]);return a.length?new f(b,a):new f(b)};f.fromString=function(a){var b=a.split("+").filter(function(a){return!a?!1:!0});a=d.fromName(b.length?b[b.length-1]:b[0]);if(b.length){if(1<b.length){var c=-1<b.indexOf("CTRL"),e=-1<b.indexOf("ALT"),n=-1<b.indexOf("SHIFT"),b=-1<
b.indexOf("META")||-1<b.indexOf("META_RIGHT"),c=s([c,e,n,b]);if(a&&c.length)return new f(a,c);throw Error("Combo.fromString: Invalid Combo string, more than one non-meta key was specified.");}if(a)return new f(a)}throw Error("Combo.fromString: Invalid Combo string.");};f.prototype.eq=function(a){return!a||!(a instanceof f)?!1:this.key.eq(a.key)?this.shift!==a.shift?!1:this.alt!==a.alt?!1:this.ctrl!==a.ctrl?!1:this.meta!==a.meta?!1:!0:!1};f.prototype.isMatch=function(a){if(!a&&!(a instanceof f))throw Error("Combo.isMatch called with an invalid Combo object.");
if(this.key.isMeta()){if((this.shift||this.key.eq(d.SHIFT))!==a.shift||(this.alt||this.key.eq(d.ALT))!==a.alt||(this.ctrl||this.key.eq(d.CTRL))!==a.ctrl||(this.meta||this.key.eq(d.META)||this.key.eq(d.META_RIGHT))!==a.meta)return!1}else return this.eq(a);return!0};f.prototype.metaKeys=function(){var a=[this.ctrl||this.key.eq(d.CTRL),this.alt||this.key.eq(d.ALT),this.shift||this.key.eq(d.SHIFT),this.meta||this.key.eq(d.META)||this.key.eq(d.META_RIGHT)];return s(a)};l.Combo=f;k.prototype.onInputEvent=
function(a){function b(b){var c;if(c=b.eventType===a.type){if(!(b=b.isGlobal))a.target&&a.target.nodeName?(b=a.target.nodeName.toLowerCase(),b=-1===["input"===b,"textarea"===b,"select"===b].indexOf(!0)):b=!0;c=b}return c}function c(a){p("Bindings.handleEvent called for Combo: "+e.toString()+". Handler `"+a.name+"` was called.")}var e=f.fromEvent(a);if(e){var d=this.getHandlersForCombo(e).filter(b);x(d,c,!0);var g=0<d.length;d.forEach(function(b){b.handler.call(null,a)});if(g)return a.preventDefault(),
!1}};k.prototype.enable=function(){var a=this,b=Array.prototype.slice.call(arguments);b.length?b.forEach(function(b){b&&"string"===typeof b&&a.bindings.forEach(function(a){a.name===b&&(a.enabled=!0)})}):(b=this.onInputEvent.bind(this),"undefined"!==typeof h.document.addEventListener?(h.document.addEventListener("keydown",b,!1),h.document.addEventListener("keyup",b,!1),h.document.addEventListener("keypress",b,!1)):(h.document.attachEvent("onkeydown",b),h.document.attachEvent("onkeyup",b),h.document.attachEvent("onkeypress",
b)),this.bindings.forEach(function(a){a.enabled=!0}))};k.prototype.disable=function(){var a=this,b=Array.prototype.slice.call(arguments);b.length?b.forEach(function(b){b&&"string"===typeof b&&a.bindings.forEach(function(a){a.name===b&&(a.enabled=!1)})}):(b=this.onInputEvent.bind(this),"undefined"!==typeof h.document.removeEventListener?(h.document.removeEventListener("keydown",b,!1),h.document.removeEventListener("keyup",b,!1),h.document.removeEventListener("keypress",b,!1)):(h.document.detachEvent("onkeydown",
b),h.document.detachEvent("onkeyup",b),h.document.detachEvent("onkeypress",b)),this.bindings.forEach(function(a){a.enabled=!1}))};k.prototype.get=function(a){return q(this.bindings,function(b){return b.name===a})};k.prototype.load=function(a){if(!a||!a.constructor||"Object"!==a.constructor.name)throw Error("Bindings.load: `specs` must be an object.");for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c="Bindings.load: The specs object provided contains an invalid binding specification `"+
b+"` - ";if(!a[b]||!a[b].constructor||"Object"!==a[b].constructor.name)r(c+"invalid value type.");else{var e=b,n=a[b].description||"",g=a[b].bind,m=a[b].handler,h=a[b].eventType,k=a[b].isGlobal||!1;if(w(g,m)){var l;l=!m||"function"!==typeof m?!1:!0;l?g instanceof Array||g instanceof f||g instanceof d?(c=[e,n].concat(g),this.add.apply(this,c),h?this.registerHandler.call(this,e,h,m,k):this.registerHandler.call(this,e,m,k)):r(c+"bind must be an instance of Array, Combo, or Key"):r(c+"handler must be a function.")}else r(c+
"requires definition of bind or handler.")}}};k.prototype.add=function(a,b){var c=[],e=b&&"string"===typeof b?b:"",c=b&&"string"!==typeof b?Array.prototype.slice.call(arguments,1):Array.prototype.slice.call(arguments,2);if((e?3>arguments.length:2>arguments.length)||!a||!c.length)throw Error("Keybindings.add: Invalid arguments provided");c.forEach(function(a){if(!(a instanceof f||a instanceof d))throw Error("Keybindings.add: `combo` must be an instance of Key or Combo");});var n=q(this.bindings,function(b){return b.name===
a});n?(e&&(n.description=e),n.combos=c,p("Bindings.add: Updated existing binding - `"+a+"` with "+c.length+" combos")):(this.bindings.push({name:a,description:e,combos:c,enabled:!0}),p("Bindings.add: New binding - `"+a+"` with "+c.length+" combos"))};k.prototype.registerHandler=function(a,b,c,e){1===arguments.length&&"function"===typeof a&&(c=a,a=c.name,b="keydown");2===arguments.length&&"function"===typeof a?(c=a,a=c.name,e=b||!1,b="keydown"):2===arguments.length&&"function"===typeof b?"keyup"===
a||"keydown"===a||"keypress"===a?(c=b,b=a,a=c.name):(c=b,b="keydown"):3===arguments.length&&"function"===typeof b&&("keyup"===a||"keydown"===a||"keypress"===a?(e=c||!1,c=b,b=a,a=c.name):(e=c||!1,c=b,b="keydown"));if(!a||!b||!c||"function"!==typeof c)throw Error("Bindings.registerHandler: Invalid arguments provided");if("anonymous"===a)throw Error("Bindings.registerHandler: The function handler provided was anonymous when it needs to be named (in order to infer the binding name)");this.get(a)||r("Bindings.registerHandler: You have registered a handler for `"+
a+"`, but that binding as not yet been added.");this.handlers.push({name:a,eventType:b,handler:c,isGlobal:e||!1});p("Bindings.registerHandler: Handler `"+a+"` "+(e?"globally":"")+" registered for `"+b+"` events.")};k.prototype.unregisterHandler=function(a,b,c,e){var d=[];1===arguments.length&&"function"===typeof a?(c=a,a=c.name,b="keydown",this.handlers.forEach(function(b){b.name===a&&b.handler==b&&d.push(b)})):1===arguments.length&&"string"===typeof a&&this.handlers.forEach(function(b){b.name===
a&&d.push(b)});2===arguments.length&&"function"===typeof a?(a=a.name,e=b||!1,b="keydown",this.handlers.forEach(function(c){c.name===a&&(c.eventType==b&&c.handler==c&&c.isGlobal==(e||!1))&&d.push(c)})):2===arguments.length&&"function"===typeof b?("keyup"===a||"keydown"===a||"keypress"===a?(c=b,b=a,a=c.name):(c=b,b="keydown"),this.handlers.forEach(function(c){c.name===a&&(c.eventType==b&&c.handler.name==c.name&&c.isGlobal==(e||!1))&&d.push(c)})):3===arguments.length&&"function"===typeof b?("keyup"===
a||"keydown"===a||"keypress"===a?(e=c||!1,c=b,b=a,a=c.name):(e=c||!1,c=b,b="keydown"),this.handlers.forEach(function(c){c.name===a&&(c.eventType===b&&c.handler.name===c.name&&c.isGlobal===(e||!1))&&d.push(c)})):3===arguments.length&&"function"===typeof c&&this.handlers.forEach(function(c){c.name===a&&(c.eventType===b&&c.handler.name===c.name)&&d.push(c)});var g=this;d.forEach(function(a){g.handlers.splice(g.handlers.indexOf(a),1);p("Bindings.registerHandler: Handler `"+a.name+"` "+(a.isGlobal?"globally":
"")+" unregistered for `"+a.eventType+"` events.")});return 0<d.length};k.prototype.registerHandlers=function(a,b){var c=this;if(2<arguments.length||0===arguments.length)throw Error("Bindings.registerHandlers: Bad invocation. Incorrect # of arguments provided.");if(2===arguments.length&&"string"!==typeof b)throw Error("Bindings.registerHandlers: Bad invocation. eventType must be a string (keyup|keydown).");if(a instanceof Array)a.forEach(function(a){if(!a.name||"anonymous"===a.name)throw Error("Bindings.registerHandlers: Array notation with anonymous functions is not allowed.");
b?c.registerHandler(b,a):c.registerHandler(a)});else if("object"===typeof a)for(var d in a)if(a.hasOwnProperty(d)){var f=d,g=a[d];if("function"===typeof g)c.registerHandler(f,g);else if("object"===typeof g){var h=g.eventType||b,k=g.handler,g=g.isGlobal||!1;if(!k||"function"!==typeof k)throw Error("Bindings.registerHandlers: Invalid handler specification, must define the handler property as a function.");h?c.registerHandler(f,h,k,g):c.registerHandler(f,k,g)}}};k.prototype.registerToggle=function(a,
b,c,d){if(3>arguments.length)throw Error("Keybindings.registerToggle: Missing arguments.");this.handlers.push({name:a,eventType:"keydown",isGlobal:d||!1,handler:function(){var a=!1;return function(){var d=Array.prototype.slice.call(arguments);a?(a=!1,c.apply(null,d)):(a=!0,b.apply(null,d))}}()});p("Bindings.registerToggle: Toggle `"+a+"` "+(d?"globally":"")+" registered.")};k.prototype.serialize=function(){if("undefined"===typeof JSON)throw Error("Your browser does not support JSON serialization.");
return JSON.stringify(this)};k.prototype.deserialize=function(a){if("undefined"===typeof JSON)throw Error("Your browser does not support JSON serialization.");a=JSON.parse(a);if(!a||!a.bindings||a instanceof Array)throw Error("Keybindings.deserialize: Unable to deserialize keybindings");this.bindings=a.bindings.map(function(a){a.combos=a.combos.map(function(a){return"undefined"!==typeof a.code?new d(a.name,a.code):f.fromObject(a)});return a})};k.prototype.getHandlersForCombo=function(a){function b(a,
b){for(var c=0;c<a.length;c++)if(b(a[c]))return!0;return!1}var c=this.bindings.filter(function(c){return c.enabled&&b(c.combos,function(b){return b instanceof d?a.key.eq(b):b.isMatch(a)})});return this.handlers.filter(function(a){return q(c,function(b){return b.name===a.name})})};l.Bindings=k;return l});
