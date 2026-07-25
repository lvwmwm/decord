// Module ID: 3437
// Function ID: 26710
// Name: endOfQuarter
// Dependencies: [3210, 3211]
// Exports: default

// Module 3437 (endOfQuarter)
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
