// Module ID: 5545
// Function ID: 5546
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5545 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
