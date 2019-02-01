const Card = require('./card.js');
var testAmount = 10;

test('correct instance creating', () => {
    var c = new Card(testAmount);
    expect(c.getAmount()).toBe(testAmount);
});

test('crediting card is working fine', () => {
    var c = new Card(testAmount);
    var testCredit = 20;
    c.credit(testCredit)
    expect(c.getAmount()).toBe(testAmount + testCredit);
});

test('debiting card is working fine', () => {
    var c = new Card(testAmount);
    var testDebit = 5;
    c.debit(testDebit)
    expect(c.getAmount()).toBe(testAmount - testDebit);
});