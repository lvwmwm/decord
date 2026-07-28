// Module ID: 3444
// Function ID: 26732
// Name: endOfDay
// Dependencies: [3244, 3245]
// Exports: default

// Module 3444 (endOfDay)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfDay(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;
