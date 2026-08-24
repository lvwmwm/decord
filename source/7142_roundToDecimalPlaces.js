// Module ID: 7142
// Function ID: 7143
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 7142 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
