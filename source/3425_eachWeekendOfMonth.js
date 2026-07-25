// Module ID: 3425
// Function ID: 26674
// Name: eachWeekendOfMonth
// Dependencies: [3424, 3426, 3411, 3211]
// Exports: default

// Module 3425 (eachWeekendOfMonth)
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
