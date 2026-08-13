// Module ID: 5732
// Function ID: 5733
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5732 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
