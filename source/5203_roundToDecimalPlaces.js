// Module ID: 5203
// Function ID: 44098
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5203 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
