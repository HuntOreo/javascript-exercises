const repeatString = function (string, num) {
  let result = '';

  try {
    if (num < 0) {
      throw new Error('ERROR');
    };

    for (let i = 0; i < num; i++) {
      result += string;
    };
  } catch (error) {
    return error.message;
  };

  return result;
};

// Do not edit below this line
module.exports = repeatString;
