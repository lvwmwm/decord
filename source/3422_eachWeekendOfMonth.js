// Module ID: 3422
// Function ID: 26657
// Name: eachWeekendOfMonth
// Dependencies: [1923, 3383, 3405, 3410]
// Exports: default

// Module 3422 (eachWeekendOfMonth)
import module_1923 from "module_1923";
import compareAsc from "compareAsc";
import differenceInMonths from "differenceInMonths";
import differenceInSeconds from "differenceInSeconds";


export default function eachWeekendOfMonth(defaultResult1) {
  differenceInSeconds.default(1, arguments);
  defaultResult1 = compareAsc.default(defaultResult1);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError = RangeError;
    const rangeError = new RangeError("The passed date is invalid");
    throw rangeError;
  } else {
    const obj = { start: defaultResult1, end: differenceInMonths.default(defaultResult1) };
    return module_1923.default(obj);
  }
};
export default exports.default;
