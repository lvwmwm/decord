// Module ID: 6600
// Function ID: 6601
// Name: roundToDecimalPlaces
// Dependencies: []
// Exports: roundToDecimalPlaces

// Module 6600 (roundToDecimalPlaces)

export const roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
