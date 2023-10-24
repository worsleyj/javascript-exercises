const convertToCelsius = function(temperature) {
  let celsius = ((temperature - 32)*5)/9; // fahrenheit - 32 * (5/9) = celsius
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = ((temperature * 9) / 5) + 32; // celsius * (9/5) + 32 = fahrenheit
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
