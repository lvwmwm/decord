// Module ID: 3602
// Function ID: 27821
// Name: isThisMinute
// Dependencies: [3594, 3245]
// Exports: default

// Module 3602 (isThisMinute)
import isSameMinute from "isSameMinute";
import requiredArgs from "requiredArgs";


export default function isThisMinute(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameMinute.default(Date.now(), defaultResult2);
};
export default exports.default;
