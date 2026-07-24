// Module ID: 3603
// Function ID: 27807
// Name: nextTuesday
// Dependencies: [3597, 3210]
// Exports: default

// Module 3603 (nextTuesday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextTuesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 2);
};
export default exports.default;
