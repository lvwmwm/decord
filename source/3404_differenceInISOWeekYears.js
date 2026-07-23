// Module ID: 3404
// Function ID: 26602
// Name: differenceInISOWeekYears
// Dependencies: [3209, 3393, 3385, 3405, 3210]
// Exports: default

// Module 3404 (differenceInISOWeekYears)
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
