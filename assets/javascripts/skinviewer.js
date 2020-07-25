(function($) {



  var applyskinviewer = function($skinviewer) {
        console.log("yes!");

    $skinviewer = $skinviewer.get(0);
    var container = document.createElement("div");
    container.id = "skin_container";
    $skinviewer.appendChild(container);
    return $skinviewer;
  };

  $.fn.skind = function() {
    return this.each(function() {
      applyskinviewer($(this));
    });
  };
})(jQuery);
