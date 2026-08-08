// Module ID: 5692
// Function ID: 5693
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5692 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
