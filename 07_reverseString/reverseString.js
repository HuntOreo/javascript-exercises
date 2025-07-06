const reverseString = function (string) {
  let stringDissected = string.split('');
  let stringReversed = '';

  stringDissected.reverse();
  stringReversed = stringDissected.join('');

  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
