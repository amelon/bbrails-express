JabberApp.module('Utilities', function(Utilities, App, Backbone, Marionette, $, _) {

  var API = {

    register: function(instance, id) {
      if (!this._registry) this._registry = {};
      this._registry[id] = instance;
    }

  , unregister: function(instance, id) {
      delete this._registry[id];
    }

  , resetRegistry: function() {
      var old_count = this.getRegistrySize();
      _.each(this._registry, function(controller, key) {
        if (controller.region) controller.region.close();
      });

      var msg = ['There were ', old_count, ' controllers in the registry, there are now ', this.getRegistrySize()].join('');
      if (this.getRegistrySize() > 0) {
        console.warn(msg, this._registry);
      } else {
        console.log(msg);
      }
    }

  , getRegistrySize: function() {
      return _.size(this._registry);
    }
  };


  App.commands.setHandler('register:instance', function(instance, id) {
    if (App.environment == 'development') {
      API.register(instance, id);
    }
  });

  App.commands.setHandler('unregister:instance', function(instance, id) {
    if (App.environment == 'development') {
      API.unregister(instance, id);
    }
  });

  App.commands.setHandler('reset:registry', function() {
    API.resetRegistry();
  });
});