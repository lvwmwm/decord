// Module ID: 3569
// Function ID: 27712
// Name: isThisQuarter
// Dependencies: [3561, 3210]
// Exports: default

// Module 3569 (isThisQuarter)
import isSameQuarter from "isSameQuarter";
import requiredArgs from "requiredArgs";


export default function isThisQuarter(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameQuarter.default(Date.now(), defaultResult2);
};
export default exports.default;
