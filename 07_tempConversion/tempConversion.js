// °C = (°F - 32) × 5/9
// °F = (9/5 × °C) + 32.

const convertToCelsius = function(temp) {
  temp = ((temp - 32) * 5/9).toFixed(1);
  return temp;
};

const convertToFahrenheit = function(temp) {
  temp = (((9/5) * temp) + 32).toFixed(1);
  return temp;
};

console.log(convertToCelsius(89));
console.log(convertToFahrenheit(22));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
