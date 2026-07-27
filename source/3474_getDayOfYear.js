// Module ID: 3474
// Function ID: 26863
// Name: getDayOfYear
// Dependencies: [3210, 3429, 3372, 3211]
// Exports: default

// Module 3474 (getDayOfYear)
import _typeof from "_typeof";
import startOfYear from "startOfYear";
import differenceInCalendarDays from "differenceInCalendarDays";
import requiredArgs from "requiredArgs";


export default function getDayOfYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  return differenceInCalendarDays.default(defaultResult1, startOfYear.default(defaultResult1)) + 1;
};
export default exports.default;
