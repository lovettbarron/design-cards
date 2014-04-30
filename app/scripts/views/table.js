/*global cardflip, Backbone, JST*/

cardflip.Views = cardflip.Views || {};

(function () {
    'use strict';

    cardflip.Views.TableView = Backbone.View.extend({

        template: JST['app/scripts/templates/table.ejs']

    });

})();
