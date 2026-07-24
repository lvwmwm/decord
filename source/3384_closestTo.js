// Module ID: 3384
// Function ID: 26542
// Name: closestTo
// Dependencies: [3209, 3210]
// Exports: default

// Module 3384 (closestTo)
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function closestTo(defaultResult1) {
  requiredArgs.default(2, arguments);
  defaultResult1 = _typeof.default(defaultResult1);
  if (isNaN(Number(defaultResult1))) {
    let _Date = Date;
    let _NaN = NaN;
    let date = new Date(NaN);
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
      const defaultResult = outer1_0.default(defaultResult1);
      if (isNaN(Number(defaultResult))) {
        const _Date = Date;
        const _NaN = NaN;
        let date = new Date(NaN);
        const _NaN2 = NaN;
        let absolute = NaN;
      } else {
        const _Math = Math;
        absolute = Math.abs(closure_2 - defaultResult.getTime());
        let tmp5 = null == date;
        if (!tmp5) {
          const _Number = Number;
          tmp5 = absolute < Number(absolute);
        }
        if (tmp5) {
          date = defaultResult;
        }
      }
    });
    return _typeof;
  }
};
export default exports.default;
