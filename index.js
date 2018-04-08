/**
 * Increments a number by 1.
 * 
 * @param {string} a Number to increment.
 * @return {string} Result as number string.
 */
exports.increment = function(a) {
    var zrx = /^0+/;
    a = a.match(/\d/g).join('').replace(zrx, '');
    return sum(a, '1');
}

/**
 * Decrements a number by 1.
 * 
 * @param {string} a Number to decrement.
 * @return {string} Result as number string.
 */
exports.decrement = function(a) {
    var zrx = /^0+/;
    a = a.match(/\d/g).join('').replace(zrx, '');
    return subtract(a, '1');
}

const sum = (a, b) => {
    a = a.split('').reverse();
    b = b.split('').reverse();

    var result = [];
    var longest = Math.max(a.length, b.length);
    var carry = 0;
    for (var i = 0; i < longest; i++) {
        var unitSum = parseInt(a[i] || 0) + parseInt(b[i] || 0) + carry;
        var unit = unitSum % 10;
        carry = (unitSum - unit) / 10;
        result.push(unit);
    }
    if (carry > 0) {
        result.push(carry);
    }

    return result.reverse().join('');
}

const subtract = (a, b) => {
    a = a.split('').reverse();
    b = b.split('').reverse();

    var aIsBigger = isBigger(a, b);
    if (aIsBigger === 0)
        return "0";
    var reversed = false;
    if (aIsBigger < 0) {
        let temp = a.slice();
        a = b.slice();
        b = temp;
        reversed = true;
    }

    var result = [];
    var longest = Math.max(a.length, b.length);
    var carry = 0;
    for (var i = 0; i < longest; i++) {
        var unit = parseInt(a[i] || 0) - carry - parseInt(b[i] || 0);
        if (unit < 0) {
            unit += 10;
            carry = 1;
        } else {
            carry = 0;
        }
        result.push(unit);
    }
    if (result[longest - 1] === 0)
        result.pop();
    result = result.reverse().join('');
    if (reversed)
        return "-" + result;
    return result;
}

const isBigger = (a, b) => {
    if (a.length > b.length)
        return 1;
    if (b.length > a.length)
        return -1;
    for (var i = 0; i < a.length; i++) {
        var intA = parseInt(a[i]);
        var intB = parseInt(b[i]);
        if (intA > intB)
            return 1;
        if (intB > intA)
            return -1;
    }
    return 0;
}