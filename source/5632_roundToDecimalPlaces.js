// Module ID: 5632
// Function ID: 5633
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5632 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
