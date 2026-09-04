// Module ID: 6860
// Function ID: 6861
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 6860 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
