// Module ID: 3395
// Function ID: 26575
// Name: differenceInCalendarMonths
// Dependencies: [3209, 3210]
// Exports: default

// Module 3395 (differenceInCalendarMonths)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function differenceInCalendarMonths(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = _typeof.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  const month = defaultResult1.getMonth();
  return 12 * diff + (month - defaultResult2.getMonth());
};
export default exports.default;
