// Module ID: 3509
// Function ID: 26962
// Name: isFriday
// Dependencies: [3210, 3211]
// Exports: default

// Module 3509 (isFriday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isFriday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 5 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
