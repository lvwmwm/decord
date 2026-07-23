// Module ID: 3366
// Function ID: 26479
// Name: getISOWeekYear
// Dependencies: [3209, 3367, 3210]
// Exports: default

// Module 3366 (getISOWeekYear)
import _typeof from "_typeof";
import startOfISOWeek from "startOfISOWeek";
import requiredArgs from "requiredArgs";


export default function getISOWeekYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const fullYear = defaultResult1.getFullYear();
  const date = new Date(0);
  date.setFullYear(fullYear + 1, 0, 4);
  date.setHours(0, 0, 0, 0);
  const date1 = new Date(0);
  date1.setFullYear(fullYear, 0, 4);
  date1.setHours(0, 0, 0, 0);
  const defaultResult2 = startOfISOWeek.default(date);
  const time = defaultResult1.getTime();
  if (time >= defaultResult2.getTime()) {
    let sum = fullYear + 1;
  } else {
    const time1 = defaultResult1.getTime();
    sum = fullYear;
    if (time1 < defaultResult3.getTime()) {
      sum = fullYear - 1;
    }
  }
  return sum;
};
export default exports.default;
