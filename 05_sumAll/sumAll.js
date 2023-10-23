const sumAll = function(num1, num2) {
    let sum = 0
    if(num1 < num2) { // if num1 is lower than num2, switch their values
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    if((num1 < 0) || (num2 < 0)) { return "ERROR"} // if negative, return error

    if((typeof num1 != 'number') || (typeof num2 !== 'number')) { return "ERROR"}
    while (num1 >= num2) { // adds num2 to sum until num2 is equal to num1
        sum += num2;
        num2++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
