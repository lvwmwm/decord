// Module ID: 3431
// Function ID: 26692
// Name: differenceInCalendarQuarters
// Dependencies: [3432, 3244, 3245]
// Exports: default

// Module 3431 (differenceInCalendarQuarters)
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
