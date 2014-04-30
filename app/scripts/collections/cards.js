/*global cardflip, Backbone*/

cardflip.Collections = cardflip.Collections || {};

(function () {
    'use strict';

    cardflip.Collections.CardsCollection = Backbone.Collection.extend({

        model: cardflip.Models.CardModel,

    	url: '/scripts/data/cards.json',

        init: function() {

        },

        getCardByCategory: function(id) {
	        // var cards = this.pluck('') ? this.pluck('description') : "No desc";	
	        var list = this.pluck(id)[0];
	        return list.
	        console.log('list',id,list)
        },

        getCategoryName: function(id) {
        	var name = this.pluck(id)[0].category;
        	console.log('name',name)
        	return this.pluck(id).at('category');
        },

        categoryLength: function() {

        }
    });

})();
