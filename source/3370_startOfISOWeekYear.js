// Module ID: 3370
// Function ID: 26491
// Name: startOfISOWeekYear
// Dependencies: [3366, 3367, 3210]
// Exports: default

// Module 3370 (startOfISOWeekYear)
import getISOWeekYear from "getISOWeekYear";
import startOfISOWeek from "startOfISOWeek";
import requiredArgs from "requiredArgs";


export default function startOfISOWeekYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  const date = new Date(0);
  date.setFullYear(getISOWeekYear.default(defaultResult1), 0, 4);
  date.setHours(0, 0, 0, 0);
  return startOfISOWeek.default(date);
};
export default exports.default;
