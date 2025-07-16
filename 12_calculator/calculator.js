const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length == 0) {
    return 0;
  }

  return arr.reduce((prev, current) => prev + current);
};

const multiply = function (arr) {
  if (arr.length == 0) {
    return 0;
  }

  return arr.reduce((prev, current) => prev * current);
};

const power = function (int, power) {
  return int ** power;
};

const factorial = function (int) {
  let arr = [];
  let result;
  if (int == 0 || int == 1) {
    return 1;
  }

  for (let i = 1; i <= int; i++) {
    arr.push(i);
  }

  result = arr.reduce((prev, current) => prev * current);

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
