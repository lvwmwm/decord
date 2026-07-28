// Module ID: 3396
// Function ID: 26579
// Name: isSunday
// Dependencies: [3244, 3245]
// Exports: default

// Module 3396 (isSunday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isSunday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 0 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
