// Module ID: 3570
// Function ID: 27724
// Name: isThisQuarter
// Dependencies: [3562, 3211]
// Exports: default

// Module 3570 (isThisQuarter)
import isSameQuarter from "isSameQuarter";
import requiredArgs from "requiredArgs";


export default function isThisQuarter(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameQuarter.default(Date.now(), defaultResult2);
};
export default exports.default;
