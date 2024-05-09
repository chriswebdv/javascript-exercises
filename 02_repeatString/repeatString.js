const repeatString = function(word, num) {
    if (num < 0) return "ERROR";
    let string = "";
    for (let num = 0; num < 3; num++) {
        string += word;
    }
    return string;
};

repeatString('hello', 10)

// Do not edit below this line
module.exports = repeatString;
