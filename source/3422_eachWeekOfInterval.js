// Module ID: 3422
// Function ID: 26657
// Name: eachWeekOfInterval
// Dependencies: [3377, 3368, 3209, 3210]
// Exports: default

// Module 3422 (eachWeekOfInterval)
import addWeeks from "addWeeks";
import startOfWeek from "startOfWeek";
import _typeof from "_typeof";
import requiredArgs from "requiredArgs";


export default function eachWeekOfInterval(arg0, defaultResult2) {
  let time2;
  let obj = arg0;
  requiredArgs.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = _typeof.default(obj.start);
  defaultResult2 = _typeof.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    let defaultResult3 = startOfWeek.default(defaultResult1, defaultResult2);
    const defaultResult4 = startOfWeek.default(defaultResult2, defaultResult2);
    defaultResult3.setHours(15);
    defaultResult4.setHours(15);
    const time1 = defaultResult4.getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let setHoursResult2 = defaultResult3.setHours(0);
        let tmp14 = _typeof;
        let arr = items.push(_typeof.default(defaultResult3));
        let tmp16 = addWeeks;
        let defaultResult5 = addWeeks.default(defaultResult3, 1);
        let setHoursResult3 = defaultResult5.setHours(15);
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
