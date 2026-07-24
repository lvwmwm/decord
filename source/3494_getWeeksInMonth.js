// Module ID: 3494
// Function ID: 26913
// Name: getWeeksInMonth
// Dependencies: [3398, 3495, 3425, 3210]
// Exports: default

// Module 3494 (getWeeksInMonth)
import differenceInCalendarWeeks from "differenceInCalendarWeeks";
import lastDayOfMonth from "lastDayOfMonth";
import startOfMonth from "startOfMonth";
import requiredArgs from "requiredArgs";


export default function getWeeksInMonth(defaultResult1, date) {
  requiredArgs.default(1, arguments);
  return differenceInCalendarWeeks.default(lastDayOfMonth.default(defaultResult1), startOfMonth.default(defaultResult1), date) + 1;
};
export default exports.default;
