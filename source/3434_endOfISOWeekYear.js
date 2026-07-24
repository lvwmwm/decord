// Module ID: 3434
// Function ID: 26693
// Name: endOfISOWeekYear
// Dependencies: [3366, 3367, 3210]
// Exports: default

// Module 3434 (endOfISOWeekYear)
import getISOWeekYear from "getISOWeekYear";
import startOfISOWeek from "startOfISOWeek";
import requiredArgs from "requiredArgs";


export default function endOfISOWeekYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(getISOWeekYear.default(defaultResult1) + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  defaultResult2.setMilliseconds(defaultResult2.getMilliseconds() - 1);
  return defaultResult2;
};
export default exports.default;
