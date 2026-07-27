// Module ID: 3495
// Function ID: 26925
// Name: getWeeksInMonth
// Dependencies: [3399, 3496, 3426, 3211]
// Exports: default

// Module 3495 (getWeeksInMonth)
import differenceInCalendarWeeks from "differenceInCalendarWeeks";
import lastDayOfMonth from "lastDayOfMonth";
import startOfMonth from "startOfMonth";
import requiredArgs from "requiredArgs";


export default function getWeeksInMonth(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return differenceInCalendarWeeks.default(lastDayOfMonth.default(defaultResult1), startOfMonth.default(defaultResult1), date) + 1;
};
export default exports.default;
