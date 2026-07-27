// Module ID: 3557
// Function ID: 27686
// Name: isSameISOWeek
// Dependencies: [3558, 3211]
// Exports: default

// Module 3557 (isSameISOWeek)
import isSameWeek from "isSameWeek";
import requiredArgs from "requiredArgs";


export default function isSameISOWeek(defaultResult1, defaultResult2) {
  requiredArgs.default(2, arguments);
  return isSameWeek.default(defaultResult1, defaultResult2, { weekStartsOn: 1 });
};
export default exports.default;
