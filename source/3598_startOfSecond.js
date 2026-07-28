// Module ID: 3598
// Function ID: 27809
// Name: startOfSecond
// Dependencies: [3244, 3245]
// Exports: default

// Module 3598 (startOfSecond)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfSecond(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMilliseconds(0);
  return defaultResult1;
};
export default exports.default;
