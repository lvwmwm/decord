// Module ID: 5202
// Function ID: 44105
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5202 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
