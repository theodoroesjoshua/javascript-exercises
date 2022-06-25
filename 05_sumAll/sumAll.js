const sumAll = function(firstNumber, lastNumber) {
  if (firstNumber < 0 || lastNumber < 0 || 
    typeof(firstNumber) != "number" || typeof(lastNumber) != "number") {
    return 'ERROR';
  }

  const biggerNumber = Math.max(firstNumber, lastNumber);
  const smallerNumber = Math.min(firstNumber, lastNumber);

  let sum = 0;
  for (let i = smallerNumber; i <= biggerNumber; i++) {
    sum += i;
  }
  return sum;

};

// Do not edit below this line
module.exports = sumAll;
