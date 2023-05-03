const removeFromArray = function(array, ...theArgs) {
    for (let i = 0; i < theArgs.length; i++) {
        if (array.includes(theArgs[i])) {
            array.splice(array.indexOf(theArgs[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
