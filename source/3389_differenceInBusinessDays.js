// Module ID: 3389
// Function ID: 26554
// Name: differenceInBusinessDays
// Dependencies: [3357, 3371, 3390, 3391, 3360, 3209, 3210, 3213]
// Exports: default

// Module 3389 (differenceInBusinessDays)
import addDays from "addDays";
import differenceInCalendarDays from "differenceInCalendarDays";
import isSameDay from "isSameDay";
import isValid from "isValid";
import isWeekend from "isWeekend";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";
import toInteger from "toInteger";


export default function differenceInBusinessDays(defaultResult1, defaultResult1) {
  let defaultResult6;
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  const defaultResult2 = _typeof.default(defaultResult1);
  if (isValid.default(defaultResult1)) {
    if (isValid.default(defaultResult2)) {
      const defaultResult3 = differenceInCalendarDays.default(defaultResult1, defaultResult2);
      let num2 = 1;
      if (defaultResult3 < 0) {
        num2 = -1;
      }
      const defaultResult4 = toInteger.default(defaultResult3 / 7);
      const result = 5 * defaultResult4;
      const defaultResult5 = addDays.default(defaultResult2, 7 * defaultResult4);
      let tmp13 = defaultResult5;
      let sum = result;
      let tmp15 = result;
      if (!isSameDay.default(defaultResult1, defaultResult5)) {
        do {
          let tmp16 = isWeekend;
          let tmp17 = tmp13;
          let num5 = 0;
          if (!isWeekend.default(tmp13)) {
            num5 = num2;
          }
          sum = sum + num5;
          let tmp18 = addDays;
          defaultResult6 = addDays.default(tmp13, num2);
          let tmp20 = isSameDay;
          tmp13 = defaultResult6;
          tmp15 = sum;
        } while (!isSameDay.default(defaultResult1, defaultResult6));
      }
      let num6 = 0;
      if (0 !== tmp15) {
        num6 = tmp15;
      }
      return num6;
    }
  }
  return NaN;
};
export default exports.default;
