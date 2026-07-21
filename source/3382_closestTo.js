// Module ID: 3382
// Function ID: 26531
// Name: closestTo
// Dependencies: [3366, 3370]
// Exports: default

// Module 3382 (closestTo)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function closestTo(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  if (isNaN(Number(defaultResult1))) {
    const _Date = Date;
    const _NaN = NaN;
    const date = new Date(NaN);
    return date;
  } else {
    const time = defaultResult1.getTime();
    if (null == arg1) {
      let items = [];
    } else {
      items = arg1;
      if ("function" !== typeof arg1.forEach) {
        const _Array = Array;
        items = slice.call(arg1);
      }
    }
    const item = items.forEach((defaultResult1) => {
      let defaultResult = defaultResult.default(defaultResult1);
      if (isNaN(Number(defaultResult))) {
        const _Date = Date;
        const _NaN = NaN;
        const date = new Date(NaN);
        defaultResult = date;
        const _NaN2 = NaN;
        let absolute = NaN;
      } else {
        const _Math = Math;
        absolute = Math.abs(closure_2 - defaultResult.getTime());
        let tmp5 = null == defaultResult;
        if (!tmp5) {
          const _Number = Number;
          tmp5 = absolute < Number(absolute);
        }
      }
    });
    return startOfWeek;
  }
};
export default exports.default;
