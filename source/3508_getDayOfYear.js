// Module ID: 3508
// Function ID: 26965
// Name: getDayOfYear
// Dependencies: [3244, 3463, 3406, 3245]
// Exports: default

// Module 3508 (getDayOfYear)
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
