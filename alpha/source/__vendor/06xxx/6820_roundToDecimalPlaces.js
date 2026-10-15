// Module ID: 6820
// Function ID: 6821
// Name: roundToDecimalPlaces
// Dependencies: []
// Exports: roundToDecimalPlaces

// Module 6820 (roundToDecimalPlaces)

export const roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
