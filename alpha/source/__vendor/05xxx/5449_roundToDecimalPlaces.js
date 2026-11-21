// Module ID: 5449
// Function ID: 5450
// Name: roundToDecimalPlaces
// Dependencies: []
// Exports: roundToDecimalPlaces

// Module 5449 (roundToDecimalPlaces)

export function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
}
