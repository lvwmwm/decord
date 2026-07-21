// Module ID: 3381
// Function ID: 26527
// Name: closestIndexTo
// Dependencies: [3366, 3370]
// Exports: default

// Module 3381 (closestIndexTo)
import startOfWeek from "startOfWeek";
import getTimezoneOffsetInMilliseconds from "getTimezoneOffsetInMilliseconds";


export default function closestIndexTo(defaultResult1) {
  getTimezoneOffsetInMilliseconds.default(2, arguments);
  defaultResult1 = startOfWeek.default(defaultResult1);
  if (isNaN(Number(defaultResult1))) {
    const _NaN = NaN;
    return NaN;
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
      const defaultResult = arg1.default(defaultResult1);
      if (isNaN(Number(defaultResult))) {
        const _NaN = NaN;
        const arg1 = NaN;
        const _NaN2 = NaN;
        let absolute = NaN;
      } else {
        const _Math = Math;
        absolute = Math.abs(closure_2 - defaultResult.getTime());
        let tmp5 = null == arg1;
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
