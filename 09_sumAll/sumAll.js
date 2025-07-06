const sumAll = function (intOne, intTwo) {
  let result = 0;
  let start = intOne;
  let end = intTwo;

  try {
    if (intOne < 0 || intTwo < 0) {
      throw new Error('ERROR');
    };

    if (typeof intOne != 'number' || typeof intTwo != 'number') {
      throw new Error('ERROR');
    };

    if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) {
      throw new Error('ERROR');
    }

    if (start > end) {
      start = intTwo;
      end = intOne;
    };

    for (; start <= end; start++) {
      result += start;
    };

    return result;

  } catch (error) {
    return error.message;
  };
};

// Do not edit below this line
module.exports = sumAll;
