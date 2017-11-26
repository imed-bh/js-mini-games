window.$ = (function() {

  var $ = function(selector) {
    if (selector.startsWith('#'))
      return _findById(selector.substring(1));
  };

  function _findById(id) {
    return document.getElementById(id);
  };

  $.onload = function(f) {
    document.addEventListener('DOMContentLoaded', f);
  };

  return $;
})();