// Module ID: 3436
// Function ID: 26708
// Name: endOfMinute
// Dependencies: [3210, 3211]
// Exports: default

// Module 3436 (endOfMinute)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfMinute(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setSeconds(59, 999);
  return defaultResult1;
};
export default exports.default;
