Calculator = function() {
    this.value = 0;
}

Calculator.prototype.add = function(number) {
    if (typeOf(number) == "number") {
        this.value += number;
    } else {
        alert("Error!");
    }
}