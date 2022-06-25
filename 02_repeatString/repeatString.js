const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR";
  }
  if (string === '') {
    return '';
  }
  let i = num;
  let result = '';
  while (0 < i) {
    result += string;
    i--;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
