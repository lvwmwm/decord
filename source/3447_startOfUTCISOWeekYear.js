// Module ID: 3447
// Function ID: 26766
// Name: startOfUTCISOWeekYear
// Dependencies: [3448, 3446, 3210]
// Exports: default

// Module 3447 (startOfUTCISOWeekYear)
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
