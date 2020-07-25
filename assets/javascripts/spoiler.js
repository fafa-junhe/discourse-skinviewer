(function($) {
  // handle lazyYT onebox
  function blurLazyYT($spoiler) {
    $("div.lazyYT", $spoiler).each(function() {
      $(this).replaceWith(
        "<p>https://youtube.com/watch?v=" + $(this).data("youtube-id") + "</p>"
      );
    });
  }

  function blur($spoiler) {
    $spoiler.addClass("spoiler-blurred");
    $("a", $spoiler).addClass("no-track-link");
  }

  var applyBlur = function($spoiler) {
    blurLazyYT($spoiler);
    blur($spoiler);
  };

  var applySpoilers = function($spoiler) {
    $spoiler = $spoiler.get(0);
    var container = document.createElement("div");
    container.id = "skin_container";
    $spoiler.appendChild(container);
    return $spoiler;
  };

  $.fn.spoil = function() {
    return this.each(function() {
      applySpoilers($(this));
    });
  };
})(jQuery);
