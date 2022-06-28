const add = function(num1, num2) {
	return num1 + num2;
}; 

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	const initialValue = 0;
  return array.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
};

const multiply = function(array) {
  const initialValue = 1;
  return array.reduce((previousValue, currentValue) => previousValue * currentValue, initialValue);
};

const power = function(num, exponent) {
  let result = 1;
	while (exponent > 0) {
    result *= num;
    exponent--;
  }
  return result;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  let result = num;
  let multiplier = num - 1;
  while (multiplier > 1) {
    result *= multiplier;
    multiplier--;
  }
  return result;
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
