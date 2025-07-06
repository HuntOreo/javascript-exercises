const removeFromArray = function (arr, ...vals) {

  // takes an array and some values
  // finds the values inside of the array
  // return an array without the provided values

  let result = [];

  arr.forEach(elem => {
    if (!vals.includes(elem)) {
      result.push(elem);
    };
  });

  return result;
}

// Do not edit below this line
module.exports = removeFromArray;
