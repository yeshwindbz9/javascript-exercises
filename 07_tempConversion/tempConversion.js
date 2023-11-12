const convertToCelsius = function(temp) {
  let temp_c = (temp -32)*5/9;
  return Math.round((temp_c + Number.EPSILON) * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let temp_f = (temp*9/5)+32;
  return Math.round((temp_f + Number.EPSILON) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
