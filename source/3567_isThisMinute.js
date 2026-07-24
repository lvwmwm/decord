// Module ID: 3567
// Function ID: 27707
// Name: isThisMinute
// Dependencies: [3559, 3210]
// Exports: default

// Module 3567 (isThisMinute)
import isSameMinute from "isSameMinute";
import requiredArgs from "requiredArgs";


export default function isThisMinute(defaultResult2) {
  requiredArgs.default(1, arguments);
  return isSameMinute.default(Date.now(), defaultResult2);
};
export default exports.default;
