// Module ID: 3405
// Function ID: 26606
// Name: startOfISOWeekYear
// Dependencies: [3401, 3402, 3245]
// Exports: default

// Module 3405 (startOfISOWeekYear)
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
