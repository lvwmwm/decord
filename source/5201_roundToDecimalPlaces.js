// Module ID: 5201
// Function ID: 44057
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5201 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
