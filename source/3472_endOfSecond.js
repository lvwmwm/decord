// Module ID: 3472
// Function ID: 26816
// Name: endOfSecond
// Dependencies: [3244, 3245]
// Exports: default

// Module 3472 (endOfSecond)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfSecond(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMilliseconds(999);
  return defaultResult1;
};
export default exports.default;
