function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

function cleanupString(string) {
    const lowercaseString = string.toLowerCase();
    const oldLength = lowercaseString.length;
    let cleanString = '';
    let oldIndex = 0;
    let newIndex = 0;
    while (oldIndex < oldLength) {
        if (isLetter(lowercaseString.charAt(oldIndex))) {
            cleanString += lowercaseString.charAt(oldIndex);
            newIndex++;
            oldIndex++;
        }
        else {
            oldIndex++;
        }
    }
    return cleanString;
}

function reverseString(string) {
    let reversedString = '';
    let oldIndex = string.length - 1;
    let newIndex = 0;
    while (oldIndex >= 0) {
        reversedString += string.charAt(oldIndex);
        newIndex++;
        oldIndex--;
    }
    return reversedString;
};

const palindromes = function (string) {
    const cleanString = cleanupString(string);
    const reversedString = reverseString(cleanString);
    return (cleanString === reversedString);
};

palindromes('racecar!');



// Do not edit below this line
module.exports = palindromes;
