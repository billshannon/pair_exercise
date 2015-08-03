var DiceGame = function (sides) {
    this.hand = [];
    this.sides = Number(sides) || 6;

    this.roll = function (numOfDie) {
        this.hand = [];
        for (var r = 1; r <= numOfDie; r++) {
            this.hand.push(Math.floor(Math.random() * (this.sides)) + 1);
        }
        return this.hand;
    };
};