const removeFromArray = function(array, ...numbers) {
  const arrayLength = array.length;
  const numbersLength = numbers.length;

  if (numbersLength > arrayLength) {
    return '';
  }
  // Goes through all the numbers that need to be checked
  for (let searchIndex = 0; searchIndex < numbersLength; searchIndex++) {
    // Goes through the array to look for the current checked number
    for (let arrayIndex = 0; arrayIndex < arrayLength; arrayIndex++) {
      if (array[arrayIndex] === numbers[searchIndex]) {
        array.splice(arrayIndex, 1);
        break;
      }
    }  
  }
  return array;
}

// Do not edit below this line
module.exports = removeFromArray;
