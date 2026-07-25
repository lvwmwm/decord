// Module ID: 3371
// Function ID: 26503
// Name: startOfISOWeekYear
// Dependencies: [3367, 3368, 3211]
// Exports: default

// Module 3371 (startOfISOWeekYear)
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
