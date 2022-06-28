const fibonacci = function(num) {
  if (typeof(num) === 'string') {
    num = parseInt(num);
  }
  if (num <= 0) return 'OOPS';
  if (num == 1) return 1;

  let firstNum = 1;
  let secondNum = 1;
  let helperVariable = 0;
  let order = 2;

  while (num > order) {
    helperVariable = secondNum;
    secondNum = firstNum + secondNum;
    firstNum = helperVariable;
    order++;
  }
  return secondNum;  
};

// Do not edit below this line
module.exports = fibonacci;
