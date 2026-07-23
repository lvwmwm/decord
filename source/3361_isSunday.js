// Module ID: 3361
// Function ID: 26464
// Name: isSunday
// Dependencies: [3209, 3210]
// Exports: default

// Module 3361 (isSunday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isSunday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 0 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
