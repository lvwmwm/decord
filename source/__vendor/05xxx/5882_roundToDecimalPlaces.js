// Module ID: 5882
// Function ID: 5883
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5882 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
