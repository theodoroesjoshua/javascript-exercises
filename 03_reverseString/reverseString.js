const reverseString = function(string) {
  if (string === '') {
    return '';
  }
  const size = string.length;
  let result = '';

  for ( let i = size; i > 0; i--) {
    result += string[i-1];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
