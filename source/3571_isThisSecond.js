// Module ID: 3571
// Function ID: 27728
// Name: isThisSecond
// Dependencies: [3563, 3211]
// Exports: default

// Module 3571 (isThisSecond)
import isSameSecond from "isSameSecond";
import requiredArgs from "requiredArgs";


export default function isThisSecond(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameSecond.default(Date.now(), defaultResult2);
};
export default exports.default;
