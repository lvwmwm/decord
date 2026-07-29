// Module ID: 5479
// Function ID: 5480
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5479 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
