// Module ID: 5613
// Function ID: 5614
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5613 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
