// Module ID: 3482
// Function ID: 26880
// Name: startOfUTCISOWeekYear
// Dependencies: [3483, 3481, 3245]
// Exports: default

// Module 3482 (startOfUTCISOWeekYear)
import getUTCISOWeekYear from "getUTCISOWeekYear";
import startOfUTCISOWeek from "startOfUTCISOWeek";
import requiredArgs from "requiredArgs";


export default function startOfUTCISOWeekYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setUTCFullYear(getUTCISOWeekYear.default(defaultResult1), 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  return startOfUTCISOWeek.default(date);
};
export default exports.default;
