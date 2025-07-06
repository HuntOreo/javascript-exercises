const leapYears = function (year) {
  const isDivisibleByFour = year % 4;
  const isDivisibleByHundred = year % 100;
  const isDivisibleByFourHundred = year % 400;

  if (isDivisibleByFour == 0) {
    if (isDivisibleByHundred == 0) {
      if (isDivisibleByFourHundred == 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
