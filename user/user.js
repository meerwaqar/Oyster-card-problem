const Card= require('../card/card.js');
const Trip = require('../trip/trip.js');

class User {

    constructor(){
        this.card = new Card(0);
        this.trip = new Trip(this.card);
    }

    getCurrentBalance(){
        return this.card.getAmount();
    }

    chargeUser(amount){
        this.card.debit(amount);
    }

    takeBus(){
        this.trip.busTrip();
    }

    loadCard(amount){
        this.card.credit(amount);
    }

    takeTube(from,to){
        this.trip.enterStation(from);
        this.trip.userSwipedCard();
        this.trip.exitStation(to);
    }

}

module.exports= User;