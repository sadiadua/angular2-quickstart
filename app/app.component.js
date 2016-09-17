(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My First Angular 2 Application by sadia</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));