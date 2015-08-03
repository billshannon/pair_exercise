var diceRoller = function () {
    return Math.floor(Math.random() * 6 + 1);
}

var diceRollerThree = function () {
    var dice = [];
    for (var i = 0; i < 3; i++) {
        dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return dice;
}

var diceRollerUpper = function (n) {
    var dice = [];
    for (var i = 0; i < 3; i++) {
        dice.push(Math.floor(Math.random() * n + 1));
    }
    return dice;
}

console.log(diceRoller());
console.log(diceRollerThree());
console.log(diceRollerUpper(100));