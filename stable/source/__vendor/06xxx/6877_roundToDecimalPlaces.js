// Module ID: 6877
// Function ID: 6878
// Name: roundToDecimalPlaces
// Dependencies: []
// Exports: roundToDecimalPlaces

// Module 6877 (roundToDecimalPlaces)

export const roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
