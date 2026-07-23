// Module ID: 3418
// Function ID: 26644
// Name: startOfMinute
// Dependencies: [3209, 3210]
// Exports: default

// Module 3418 (startOfMinute)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function startOfMinute(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setSeconds(0, 0);
  return defaultResult1;
};
export default exports.default;
