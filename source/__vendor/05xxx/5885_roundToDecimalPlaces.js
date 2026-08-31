// Module ID: 5885
// Function ID: 5886
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5885 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
