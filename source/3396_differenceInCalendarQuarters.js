// Module ID: 3396
// Function ID: 26577
// Name: differenceInCalendarQuarters
// Dependencies: [3397, 3209, 3210]
// Exports: default

// Module 3396 (differenceInCalendarQuarters)
import getQuarter from "getQuarter";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function differenceInCalendarQuarters(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = _typeof.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  return 4 * diff + (getQuarter.default(defaultResult1) - getQuarter.default(defaultResult2));
};
export default exports.default;
