// Module ID: 3563
// Function ID: 27694
// Name: startOfSecond
// Dependencies: [3209, 3210]
// Exports: default

// Module 3563 (startOfSecond)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfSecond(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMilliseconds(0);
  return defaultResult1;
};
export default exports.default;
