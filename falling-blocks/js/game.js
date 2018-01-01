window.Game = (function() {

  var Game = function(canvas, config) {
    this.canvas = canvas;
    this.config = config;
  };

  Game.prototype.init = function() {
    this.timer = new Timer(1000);
    this.setupLoop();
  };

  Game.prototype.setupLoop = function() {
    window.requestAnimationFrame(this.loop.bind(this));
  };

  Game.prototype.loop = function(time) {
    if (this.timer.update(time)) {
      this.step();
    }
    this.setupLoop();
  };

  Game.prototype.step = function() {
    this.checkLines();
    this.moveDown();
    this.checkGameOver();
  };

  Game.prototype.checkLines = function() {

  };

  Game.prototype.moveDown = function() {

  };

  Game.prototype.checkGameOver = function() {

  };

  return Game;
})();