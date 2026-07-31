// Module ID: 5483
// Function ID: 5484
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5483 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
