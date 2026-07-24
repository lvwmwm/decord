// Module ID: 3407
// Function ID: 26612
// Name: differenceInMonths
// Dependencies: [3209, 3395, 3385, 3210, 3408]
// Exports: default

// Module 3407 (differenceInMonths)
import _typeof from "_typeof";
import differenceInCalendarMonths from "differenceInCalendarMonths";
import compareAsc from "compareAsc";
import requiredArgs from "requiredArgs";
import isLastDayOfMonth from "isLastDayOfMonth";


export default function differenceInMonths(date, friendsSince) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(date);
  const defaultResult2 = _typeof.default(friendsSince);
  const defaultResult3 = compareAsc.default(defaultResult1, defaultResult2);
  const absolute = Math.abs(differenceInCalendarMonths.default(defaultResult1, defaultResult2));
  let num = 0;
  if (absolute >= 1) {
    let tmp5 = 1 === defaultResult1.getMonth();
    if (tmp5) {
      tmp5 = defaultResult1.getDate() > 27;
    }
    if (tmp5) {
      defaultResult1.setDate(30);
    }
    defaultResult1.setMonth(defaultResult1.getMonth() - defaultResult3 * absolute);
    let flag = compareAsc.default(defaultResult1, defaultResult2) === -defaultResult3;
    let tmp11 = isLastDayOfMonth.default(_typeof.default(date)) && 1 === absolute;
    if (tmp11) {
      tmp11 = 1 === compareAsc.default(date, defaultResult2);
    }
    if (tmp11) {
      flag = false;
    }
    const _Number = Number;
    num = defaultResult3 * (absolute - Number(flag));
  }
  let num4 = 0;
  if (0 !== num) {
    num4 = num;
  }
  return num4;
};
export default exports.default;
