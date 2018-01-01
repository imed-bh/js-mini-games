$.onload(function() {
  var canvas = $('#main');
  var ui = new GameUI(canvas);
  var config = new GameConfiguration();
  var game = new Game(ui, config);
  game.init();
});