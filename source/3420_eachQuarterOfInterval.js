// Module ID: 3420
// Function ID: 26651
// Name: eachQuarterOfInterval
// Dependencies: [3375, 3421, 3209, 3210]
// Exports: default

// Module 3420 (eachQuarterOfInterval)
import addQuarters from "addQuarters";
import startOfQuarter from "startOfQuarter";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function eachQuarterOfInterval(arg0) {
  let time2;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = _typeof.default(obj.start);
  const defaultResult2 = _typeof.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    let defaultResult3 = startOfQuarter.default(defaultResult1);
    const time1 = startOfQuarter.default(defaultResult2).getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let tmp11 = _typeof;
        let arr = items.push(_typeof.default(defaultResult3));
        let tmp13 = addQuarters;
        let defaultResult5 = addQuarters.default(defaultResult3, 1);
        defaultResult3 = defaultResult5;
        time2 = defaultResult5.getTime();
      } while (time2 <= time1);
    }
    return items;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
};
export default exports.default;
