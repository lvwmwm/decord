// Module ID: 5926
// Function ID: 5927
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5926 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
