/*global cardflip, Backbone*/

cardflip.Models = cardflip.Models || {};

(function () {
    'use strict';

    cardflip.Models.CardModel = Backbone.Model.extend({

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
