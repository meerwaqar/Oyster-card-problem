const User = require('./user.js');
const Card = require('../card/card.js');
const Trip = require('../trip/trip.js');


describe('correct instance creating', () => {

    test('valid card instance', () => {
        var u = new User();
        expect(u.card instanceof Card).toBeTruthy();
    });

    test('valid trip instance', () => {
        var u = new User();
        expect(u.trip instanceof Trip).toBeTruthy();
    });

});

test('card is loading', () => {
    var u = new User();
    var amount = 30;
    u.loadCard(amount);
    expect(u.card.getAmount()).toBe(amount);
});