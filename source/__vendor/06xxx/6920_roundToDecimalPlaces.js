// Module ID: 6920
// Function ID: 6921
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 6920 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
