// Module ID: 5574
// Function ID: 5575
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5574 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
