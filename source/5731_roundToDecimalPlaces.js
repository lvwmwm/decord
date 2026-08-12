// Module ID: 5731
// Function ID: 5732
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5731 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
