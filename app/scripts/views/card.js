/*global cardflip, Backbone, JST*/

cardflip.Views = cardflip.Views || {};

(function () {
    'use strict';

    cardflip.Views.CardView = Backbone.View.extend({
        template: JST['app/scripts/templates/card.ejs'],
        errorTemplate: JST['app/scripts/templates/card-err.ejs'],
        events: {
        	'click .header': 'getNewCard',
        	'click .freeze': 'freezeCard'
        },
        
        init: function() {
        	var _this = this;
        	this.freeze = false;
        	console.log("hi")
        	this.category = this.options.category || 0;
			this.collection.fetch({
                success: function() {
                    // console.log(JSON.stringify(_this.collection));
                    _this.render();
                },
                error: function() {
                    _this.renderError();
                }
            })
        },

        render: function() {
	        $(this.el).html(this.template({
	        	category: this.collection.getCategoryName(this.category),
                card: this.collection.getCardByCategory(this.category)
            }));
        },

        getNewCard: function() {
        	if(!this.freeze) {
        		// Re-render cards
        	} else {
        		// Flash header or rotate card slightly?
        	}

        },

        renderError: function() {
	        $(this.el).html(this.errorTemplate());
        },

        freezeCard: function() {
	        this.freeze = !this.freeze;
        	if(this.freeze) $(this.el).find('.freeze').addClass('frozen');
	        else $(this.el).find('.frozen').removeClass('frozen');
        }




    });

})();
