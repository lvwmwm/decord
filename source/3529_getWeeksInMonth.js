// Module ID: 3529
// Function ID: 27027
// Name: getWeeksInMonth
// Dependencies: [3433, 3530, 3460, 3245]
// Exports: default

// Module 3529 (getWeeksInMonth)
import differenceInCalendarWeeks from "differenceInCalendarWeeks";
import lastDayOfMonth from "lastDayOfMonth";
import startOfMonth from "startOfMonth";
import requiredArgs from "requiredArgs";


export default function getWeeksInMonth(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return differenceInCalendarWeeks.default(lastDayOfMonth.default(defaultResult1), startOfMonth.default(defaultResult1), date) + 1;
};
export default exports.default;
