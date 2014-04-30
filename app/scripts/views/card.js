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
        colors:[ '#8e7bb3','#919ec8','#a8cfd6','#cff8da','#dcddf5','#e0c1b0','#e0dfb0','#c391c8','#91c8a4' ],
        prev: [],
        colorToCard: [],
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
            }));
            this.getNewCard();
        },

        getNewCard: function() {
        	if(!this.freeze) {
	        	var card = this.collection.getCardByCategory(this.category,this.prev);
	        	if(card) { this.prev.push(card); }
	        	else { this.prev = []; this.getNewCard(); console.log("Reset!") }
	        		$(this.el).find('.header').html(card);
	        		$(this.el).find('.header').css({
	        			background: this.getColor(card)
	        		})
        	} else {
        		// $(this.el).
        	}

        },

        renderError: function() {
	        $(this.el).html(this.errorTemplate());
        },

        freezeCard: function() {
	        this.freeze = !this.freeze;
        	if(this.freeze) $(this.el).find('.freeze').addClass('frozen').html('unfreeze');
	        else $(this.el).find('.frozen').removeClass('frozen').html('freeze');
        },

        getColor: function(search) {
          var color;
          
          color = _.findWhere(this.lemmaToColor, {'key':search});
          if(typeof color === 'undefined') {
            var iter = Math.floor(Math.random() * this.colors.length);
            color = this.colors[this.colorToCard.length%this.colors.length];
            this.colorToCard.push({'key':search, 'color': color})
            // console.log("Adding a new color for ", search )
          } else {
            color = color.color
          }
          // console.log(search,'color:',color)
          return color;
        },




    });

})();
