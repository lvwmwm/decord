// Module ID: 5426
// Function ID: 46499
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5426 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
