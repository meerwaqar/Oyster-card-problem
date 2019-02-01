 class Card {
    constructor(amount=0){
        this.balance = amount;
    }

    getAmount(){
        return this.balance
    }
    credit(amount){
        console.log(`Crediting card with an amount of £${amount} \n`);
        this.balance+=amount;
    }
    debit(amount){
        console.log("debiting £"+ amount);
        this.balance-=amount;
        console.log("closing balance is £"+ this.balance);
        console.log('\n');
    }
}
module.exports= Card;