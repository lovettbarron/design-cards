/*global cardflip, $*/


window.cardflip = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Inst: {},
    Init: {},
    mobile: {
        category: 0
    },
    init: function () {
        'use strict';
     
        this.Inst.CardCollection = new this.Collections.CardsCollection({
                model: new this.Models.CardModel()
            });


        this.Init.card1 = new this.Views.CardView({
            el: '.board1',
            category: '1',
            collection:this.Inst.CardCollection
        });

        this.Init.card2 = new this.Views.CardView({
            el: '.board2',
            category: '2',
            collection:this.Inst.CardCollection
        });

        this.Init.card3 = new this.Views.CardView({
            el: '.board3',
            category: '3',
            collection:this.Inst.CardCollection
        });

        this.Init.card4 = new this.Views.CardView({
            el: '.board4',
            category: '4',
            collection:this.Inst.CardCollection
        });

        _.each(this.Init, function(v){
            v.init();
        })

    }
};

$(document).ready(function () {
    'use strict';
    cardflip.init();
});
