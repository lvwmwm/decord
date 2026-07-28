// Module ID: 3612
// Function ID: 27851
// Name: isWednesday
// Dependencies: [3244, 3245]
// Exports: default

// Module 3612 (isWednesday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isWednesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 3 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
