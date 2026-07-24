// Module ID: 3427
// Function ID: 26672
// Name: endOfYear
// Dependencies: [3209, 3210]
// Exports: default

// Module 3427 (endOfYear)
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
