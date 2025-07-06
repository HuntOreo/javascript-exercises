const removeFromArray = function (arr, ...valsToDelete) {
  let result = [];

  result = arr.filter(item => {
    if (valsToDelete.includes(item)) {
      return false;
    };

    return true;
  });

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
