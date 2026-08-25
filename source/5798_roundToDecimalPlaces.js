// Module ID: 5798
// Function ID: 5799
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5798 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
