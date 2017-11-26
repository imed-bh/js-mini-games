window.Game = (function() {

  var Game = function(canvas) {
    this.canvas = canvas;
  };

  Game.prototype.init = function() {
    console.log('game init');
  };

  return Game;
})();