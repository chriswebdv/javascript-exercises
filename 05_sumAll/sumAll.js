const sumAll = function(num1, num2) {

    if (num1 < 0 || isNaN(num1)){
        return "ERROR";
    } else if (num2 < 0 || isNaN(num2)){
        return "ERROR";
    } 

    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;


};

console.log(sumAll(2, 6));

// Do not edit below this line
module.exports = sumAll;
