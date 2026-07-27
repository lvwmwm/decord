// Module ID: 3362
// Function ID: 26477
// Name: isSunday
// Dependencies: [3210, 3211]
// Exports: default

// Module 3362 (isSunday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isSunday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 0 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
