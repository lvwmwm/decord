// Module ID: 3577
// Function ID: 27746
// Name: isTuesday
// Dependencies: [3210, 3211]
// Exports: default

// Module 3577 (isTuesday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isTuesday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 2 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
