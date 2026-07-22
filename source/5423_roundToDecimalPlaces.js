// Module ID: 5423
// Function ID: 46475
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5423 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
