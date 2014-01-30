JabberApp.module('AdminLocationsApp.New', function(New, App, Backbone, Marionette, $, _) {

  New.Location = App.Views.Layout.extend({
    template: require('./tpl/new_location.hbs')
  , dialog: {
      header_title: 'New Location'
    }

  , templateHelpers: function() {
      return {
        dangerLookups: this.model.dangerLookups
      };
    }
  });


});