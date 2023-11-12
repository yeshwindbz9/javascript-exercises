const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((acc, curr)=> acc+curr, 0);
};

const multiply = function(arr) {
	return arr.reduce((acc, curr)=> acc*curr, 1);
};

const power = function(n, p) {
	return Math.pow(n, p);
};

const factorial = function(number) {
	if (number===1||number===0) return 1;
  else return number * factorial(number-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
