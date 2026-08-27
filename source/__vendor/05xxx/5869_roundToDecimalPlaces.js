// Module ID: 5869
// Function ID: 5870
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5869 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
