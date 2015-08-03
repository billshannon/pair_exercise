function DiceRoller(roll, sides) {
    this.roll = roll;
    this.sides = sides;
    this.hand = function () {
        var dice = [];
        if (this.sides === undefined) {
            this.sides = 6;
        }
        for (var i = 0; i < this.roll; i++) {
            dice.push(Math.floor(Math.random() * this.sides) + 1);
        }

        return dice;
    };
}
game = new DiceRoller(5);

console.log(game.hand())
