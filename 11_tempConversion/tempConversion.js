const convertToCelsius = function (fahren) {
  const result = (fahren - 32) * (5 / 9);
  const roundedResult = Math.round(result * 10) / 10;
  return roundedResult;
};

const convertToFahrenheit = function (celsius) {
  const result = celsius * (9 / 5) + 32;
  const roundedResult = Math.round(result * 10) / 10;
  return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
