// Module ID: 3414
// Function ID: 26633
// Name: differenceInYears
// Dependencies: [3209, 3399, 3385, 3210]
// Exports: default

// Module 3414 (differenceInYears)
import _typeof from "_typeof";
import differenceInCalendarYears from "differenceInCalendarYears";
import compareAsc from "compareAsc";
import requiredArgs from "requiredArgs";


export default function differenceInYears(defaultResult1, defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = _typeof.default(defaultResult1);
  const defaultResult3 = compareAsc.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(differenceInCalendarYears.default(defaultResult1, defaultResult2));
  defaultResult1.setFullYear(1584);
  defaultResult2.setFullYear(1584);
  const result = defaultResult3 * (absolute - Number(compareAsc.default(defaultResult1, defaultResult2) === -defaultResult3));
  let num = 0;
  if (0 !== result) {
    num = result;
  }
  return num;
};
export default exports.default;
