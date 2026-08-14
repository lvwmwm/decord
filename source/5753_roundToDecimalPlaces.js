// Module ID: 5753
// Function ID: 5754
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5753 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
