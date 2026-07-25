// Module ID: 3410
// Function ID: 26629
// Name: endOfDay
// Dependencies: [3210, 3211]
// Exports: default

// Module 3410 (endOfDay)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfDay(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;
