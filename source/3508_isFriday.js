// Module ID: 3508
// Function ID: 26949
// Name: isFriday
// Dependencies: [3209, 3210]
// Exports: default

// Module 3508 (isFriday)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function isFriday(defaultResult1) {
  requiredArgs.default(1, arguments);
  return 5 === _typeof.default(defaultResult1).getDay();
};
export default exports.default;
