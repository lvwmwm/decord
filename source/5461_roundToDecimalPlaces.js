// Module ID: 5461
// Function ID: 46632
// Name: roundToDecimalPlaces
// Dependencies: []

// Module 5461 (roundToDecimalPlaces)
arg5.roundToDecimalPlaces = function roundToDecimalPlaces(averageFPS, arg1) {
  return Math.round(averageFPS * 10 ** arg1) / 10 ** arg1;
};
