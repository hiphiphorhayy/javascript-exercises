const sumAll = function(num1, num2) {
    let addedSum = 0;
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }
    for (let i = num1; i <= num2; i++) {
        addedSum += i;
    }
    if ((num1 < 0 || num2 < 0) || (typeof(num1) !== 'number' || typeof(num2) !== 'number')) {
        return 'ERROR'
    }

    return addedSum;
};

// Do not edit below this line
module.exports = sumAll;
