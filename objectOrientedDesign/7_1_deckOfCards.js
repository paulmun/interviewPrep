"use strict";

class Deck {
    constructor(){
        this.suits = ['spade', 'clove', 'diamond', 'heart'],
        this.values = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.cards = [];
    }

    populate(){
        this.cards = [];

        for (let i = 0; i < this.suits.length; i++) {
            let suit = this.suits[i];
            for (let x = 0; x < this.values.length; x++) {
                this.cards.push(new Card(suit, this.values[x]));
            }
        }
    }

    shuffle(){
        let total = this.cards.length;
        for (var i = 0; i < total; i++) {
            let temp = this.cards[i];
            let rand = Math.floor(Math.random()*(total));

            this.cards[i] = this.cards[rand];
            this.cards[rand] = temp;
        }
    }

    draw(){
        return this.cards.pop();
    }
}

class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

let deck = new Deck;
deck.populate();
deck.shuffle();
let hand = deck.draw();
console.log(deck.cards);
console.log(hand);