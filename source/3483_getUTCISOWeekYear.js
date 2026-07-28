// Module ID: 3483
// Function ID: 26883
// Name: getUTCISOWeekYear
// Dependencies: [3244, 3245, 3481]
// Exports: default

// Module 3483 (getUTCISOWeekYear)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import startOfUTCISOWeek from "startOfUTCISOWeek";


export default function getUTCISOWeekYear(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const uTCFullYear = defaultResult1.getUTCFullYear();
  const date = new Date(0);
  date.setUTCFullYear(uTCFullYear + 1, 0, 4);
  date.setUTCHours(0, 0, 0, 0);
  const date1 = new Date(0);
  date1.setUTCFullYear(uTCFullYear, 0, 4);
  date1.setUTCHours(0, 0, 0, 0);
  const defaultResult2 = startOfUTCISOWeek.default(date);
  const time = defaultResult1.getTime();
  if (time >= defaultResult2.getTime()) {
    let sum = uTCFullYear + 1;
  } else {
    const time1 = defaultResult1.getTime();
    sum = uTCFullYear;
    if (time1 < defaultResult3.getTime()) {
      sum = uTCFullYear - 1;
    }
  }
  return sum;
};
export default exports.default;
