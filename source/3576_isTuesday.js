// Module ID: 3576
// Function ID: 27734
// Name: isTuesday
// Dependencies: [3209, 3210]
// Exports: default

// Module 3576 (isTuesday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isTuesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 2 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
