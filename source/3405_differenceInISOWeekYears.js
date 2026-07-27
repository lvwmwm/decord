// Module ID: 3405
// Function ID: 26615
// Name: differenceInISOWeekYears
// Dependencies: [3210, 3394, 3386, 3406, 3211]
// Exports: default

// Module 3405 (differenceInISOWeekYears)
import _typeof from "_typeof";
import differenceInCalendarISOWeekYears from "differenceInCalendarISOWeekYears";
import compareAsc from "compareAsc";
import subISOWeekYears from "subISOWeekYears";
import requiredArgs from "requiredArgs";


export default function differenceInISOWeekYears(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = _typeof.default(defaultResult1);
  const defaultResult3 = compareAsc.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(differenceInCalendarISOWeekYears.default(defaultResult1, defaultResult2));
  const result = defaultResult3 * (absolute - Number(compareAsc.default(subISOWeekYears.default(defaultResult1, defaultResult3 * absolute), defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;
