// Module ID: 3570
// Function ID: 27715
// Name: isThisSecond
// Dependencies: [3562, 3210]
// Exports: default

// Module 3570 (isThisSecond)
import isSameSecond from "isSameSecond";
import requiredArgs from "requiredArgs";


export default function isThisSecond(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameSecond.default(Date.now(), defaultResult2);
};
export default exports.default;
