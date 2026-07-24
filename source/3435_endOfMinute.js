// Module ID: 3435
// Function ID: 26696
// Name: endOfMinute
// Dependencies: [3209, 3210]
// Exports: default

// Module 3435 (endOfMinute)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfMinute(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setSeconds(59, 999);
  return defaultResult1;
};
export default exports.default;
