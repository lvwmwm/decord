// Module ID: 3431
// Function ID: 26684
// Name: endOfHour
// Dependencies: [3209, 3210]
// Exports: default

// Module 3431 (endOfHour)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfHour(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setMinutes(59, 59, 999);
  return defaultResult1;
};
export default exports.default;
