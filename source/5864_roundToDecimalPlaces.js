// Module ID: 5864
// Function ID: 5865
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5864 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
