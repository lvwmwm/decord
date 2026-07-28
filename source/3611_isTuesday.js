// Module ID: 3611
// Function ID: 27848
// Name: isTuesday
// Dependencies: [3244, 3245]
// Exports: default

// Module 3611 (isTuesday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isTuesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 2 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
