// Module ID: 3397
// Function ID: 26590
// Name: differenceInCalendarQuarters
// Dependencies: [3398, 3210, 3211]
// Exports: default

// Module 3397 (differenceInCalendarQuarters)
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
