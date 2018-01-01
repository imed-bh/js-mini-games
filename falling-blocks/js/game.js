window.Game = (function() {

  var Game = function(canvas, config) {
    this.canvas = canvas;
    this.config = config;
  };

  Game.prototype.init = function() {
    this.loop();
  };

  Game.prototype.loop = function() {
    window.requestAnimationFrame(this.step.bind(this));
  };

  Game.prototype.step = function(time) {
    console.log(time);
    this.loop();
  };

  return Game;
})();