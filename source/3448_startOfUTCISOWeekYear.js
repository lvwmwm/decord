// Module ID: 3448
// Function ID: 26777
// Name: startOfUTCISOWeekYear
// Dependencies: [3449, 3447, 3211]
// Exports: default

// Module 3448 (startOfUTCISOWeekYear)
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
