// Module ID: 3409
// Function ID: 26617
// Name: endOfDay
// Dependencies: [3209, 3210]
// Exports: default

// Module 3409 (endOfDay)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfDay(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;
