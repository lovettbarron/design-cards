/*global cardflip, Backbone*/

cardflip.Collections = cardflip.Collections || {};

(function () {
    'use strict';

    cardflip.Collections.CardsCollection = Backbone.Collection.extend({

        model: cardflip.Models.CardModel,

    	url: 'scripts/data/cards.json',

    	selected: [],

        init: function() {

        },

        getCardByCategory: function(id,prev) {
	        var list = _.map(this.pluck(id)[0].cards, function(v) {
	        	return v.title
	        });
	        if(!_.isUndefined(prev)) list = _.difference(list,prev); // remove previous
	        console.log('list',list)
	        var len = _.size(list);
	        return list[Math.floor(Math.random() * len)]
	        console.log('list',id,list, len)
        },

        getCategoryName: function(id) {
        	var name = this.pluck(id)[0].category;
        	return name;
        },

        categoryLength: function() {

        }
    });

})();
