// Module ID: 3370
// Function ID: 26501
// Name: setISOWeekYear
// Dependencies: [3214, 3210, 3371, 3372, 3211]
// Exports: default

// Module 3370 (setISOWeekYear)
import toInteger from "toInteger";
import _typeof from "_typeof";
import startOfISOWeekYear from "startOfISOWeekYear";
import differenceInCalendarDays from "differenceInCalendarDays";
import requiredArgs from "requiredArgs";


export default function setISOWeekYear(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = toInteger.default(defaultResult1);
  const date = new Date(0);
  date.setFullYear(defaultResult2, 0, 4);
  date.setHours(0, 0, 0, 0);
  const defaultResult4 = startOfISOWeekYear.default(date);
  defaultResult4.setDate(defaultResult4.getDate() + differenceInCalendarDays.default(defaultResult1, startOfISOWeekYear.default(defaultResult1)));
  return defaultResult4;
};
export default exports.default;
