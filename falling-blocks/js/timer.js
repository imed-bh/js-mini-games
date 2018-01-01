window.Timer = (function() {

  var Timer = function(period) {
    this.period = period;
  };

  Timer.prototype.update = function(time) {
    if (!this.time) {
      this.time = time;
      return true;
    }
    if (time - this.time >= this.period) {
      this.time += this.period;
      return true;
    }
    return false;
  };

  return Timer;
})();