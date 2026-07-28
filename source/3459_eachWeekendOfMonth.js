// Module ID: 3459
// Function ID: 26777
// Name: eachWeekendOfMonth
// Dependencies: [3458, 3460, 3445, 3245]
// Exports: default

// Module 3459 (eachWeekendOfMonth)
import eachWeekendOfInterval from "eachWeekendOfInterval";
import startOfMonth from "startOfMonth";
import endOfMonth from "endOfMonth";
import requiredArgs from "requiredArgs";


export default function eachWeekendOfMonth(defaultResult1) {
  requiredArgs.default(1, arguments);
  defaultResult1 = startOfMonth.default(defaultResult1);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("The passed date is invalid");
    throw rangeError;
  } else {
    const obj = { start: defaultResult1, end: endOfMonth.default(defaultResult1) };
    return eachWeekendOfInterval.default(obj);
  }
};
export default exports.default;
