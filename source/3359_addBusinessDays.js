// Module ID: 3359
// Function ID: 26459
// Name: addBusinessDays
// Dependencies: [3360, 3209, 3213, 3210, 3361, 3362]
// Exports: default

// Module 3359 (addBusinessDays)
import isWeekend from "isWeekend";
import _typeof from "_typeof";
import toInteger from "toInteger";
import requiredArgs from "requiredArgs";
import isSunday from "isSunday";
import isSaturday from "isSaturday";


export default function addBusinessDays(defaultResult1, defaultResult1) {
  let diff;
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  let defaultResult2 = isWeekend.default(defaultResult1);
  const defaultResult3 = toInteger.default(defaultResult1);
  if (isNaN(defaultResult3)) {
    const _Date = Date;
    const _NaN = NaN;
    const date = new Date(NaN);
    return date;
  } else {
    let num3 = 1;
    const hours = defaultResult1.getHours();
    if (defaultResult3 < 0) {
      num3 = -1;
    }
    defaultResult1.setDate(defaultResult1.getDate() + 7 * toInteger.default(defaultResult3 / 5));
    const _Math = Math;
    let absolute = Math.abs(defaultResult3 % 5);
    if (absolute > 0) {
      do {
        let setDateResult1 = defaultResult1.setDate(defaultResult1.getDate() + num3);
        let tmp10 = isWeekend;
        diff = absolute;
        if (!isWeekend.default(defaultResult1)) {
          diff = absolute - 1;
        }
        absolute = diff;
      } while (diff > 0);
    }
    if (defaultResult2) {
      defaultResult2 = isWeekend.default(defaultResult1);
    }
    if (defaultResult2) {
      defaultResult2 = 0 !== defaultResult3;
    }
    if (defaultResult2) {
      if (isSaturday.default(defaultResult1)) {
        let num6 = -1;
        if (num3 < 0) {
          num6 = 2;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num6);
        const date1 = defaultResult1.getDate();
      }
      if (isSunday.default(defaultResult1)) {
        let num7 = -2;
        if (num3 < 0) {
          num7 = 1;
        }
        defaultResult1.setDate(defaultResult1.getDate() + num7);
        const date2 = defaultResult1.getDate();
      }
    }
    defaultResult1.setHours(hours);
    return defaultResult1;
  }
};
export default exports.default;
