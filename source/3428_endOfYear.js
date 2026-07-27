// Module ID: 3428
// Function ID: 26684
// Name: endOfYear
// Dependencies: [3210, 3211]
// Exports: default

// Module 3428 (endOfYear)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  defaultResult1.setFullYear(defaultResult1.getFullYear() + 1, 0, 0);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;
