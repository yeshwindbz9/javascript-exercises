const palindromes = function (str) {
    let new_str = str.replace(/[^\w]|_/g, "").toLowerCase();
    return new_str === new_str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

palindromes('A car, a man, a maraca.');