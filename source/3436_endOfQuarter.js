// Module ID: 3436
// Function ID: 26699
// Name: endOfQuarter
// Dependencies: [3209, 3210]
// Exports: default

// Module 3436 (endOfQuarter)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function endOfQuarter(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setMonth(month - month % 3 + 3, 0);
  defaultResult1.setHours(23, 59, 59, 999);
  return defaultResult1;
};
export default exports.default;
