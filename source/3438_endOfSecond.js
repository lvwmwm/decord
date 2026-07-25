// Module ID: 3438
// Function ID: 26713
// Name: endOfSecond
// Dependencies: [3210, 3211]
// Exports: default

// Module 3438 (endOfSecond)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfSecond(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMilliseconds(999);
  return defaultResult1;
};
export default exports.default;
