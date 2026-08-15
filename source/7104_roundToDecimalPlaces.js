// Module ID: 7104
// Function ID: 7105
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 7104 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
