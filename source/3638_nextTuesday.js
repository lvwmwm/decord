// Module ID: 3638
// Function ID: 27921
// Name: nextTuesday
// Dependencies: [3632, 3245]
// Exports: default

// Module 3638 (nextTuesday)
import nextDay from "nextDay";
import requiredArgs from "requiredArgs";


export default function nextTuesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return nextDay.default(defaultResult1, 2);
};
export default exports.default;
