// Module ID: 3453
// Function ID: 26759
// Name: startOfMinute
// Dependencies: [3244, 3245]
// Exports: default

// Module 3453 (startOfMinute)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfMinute(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setSeconds(0, 0);
  return defaultResult1;
};
export default exports.default;
