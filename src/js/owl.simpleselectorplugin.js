/**
 * Plugin Name
 * @since 2.0.0
 */
; (function ($, window, document, undefined) {
  SimpleSelectorPlugin = function (scope) {
    var that = this;
    this.owl = scope;
    this.removableClasses = [];
    this.owl._options = $.extend({}, SimpleSelectorPlugin.Defaults, this.owl.options);

    this.owl.$element.on('initialize.owl.carousel', function (event) {
      if (!that.owl.$element.hasClass(that.owl._options.baseClass)) {
        that.owl.$element.addClass(that.owl._options.baseClass);
        that.removableClasses.push(that.owl._options.baseClass);
      }
    });
  }

  SimpleSelectorPlugin.Defaults = {
    baseClass: 'owl-carousel'
  }

  SimpleSelectorPlugin.prototype.destroy = function () {
    for (var i = 0; i < this.removableClasses.length; i++) {
      this.owl.$element.removeClass(this.removableClasses[i]);
    }
  };
  $.fn.owlCarousel.Constructor.Plugins.SimpleSelectorPlugin = SimpleSelectorPlugin;
})(window.Zepto || window.jQuery, window, document);
