// Module ID: 7164
// Function ID: 7165
// Name: roundToDecimalPlaces
// Dependencies: []
// Exports: roundToDecimalPlaces

// Module 7164 (roundToDecimalPlaces)

export const roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
