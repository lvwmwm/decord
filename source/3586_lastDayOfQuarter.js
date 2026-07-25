// Module ID: 3586
// Function ID: 27772
// Name: lastDayOfQuarter
// Dependencies: [3210, 3211]
// Exports: default

// Module 3586 (lastDayOfQuarter)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function lastDayOfQuarter(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const month = defaultResult1.getMonth();
  defaultResult1.setMonth(month - month % 3 + 3, 0);
  defaultResult1.setHours(0, 0, 0, 0);
  return defaultResult1;
};
export default exports.default;
