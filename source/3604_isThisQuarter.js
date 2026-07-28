// Module ID: 3604
// Function ID: 27827
// Name: isThisQuarter
// Dependencies: [3596, 3245]
// Exports: default

// Module 3604 (isThisQuarter)
import isSameQuarter from "isSameQuarter";
import requiredArgs from "requiredArgs";


export default function isThisQuarter(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameQuarter.default(Date.now(), defaultResult2);
};
export default exports.default;
