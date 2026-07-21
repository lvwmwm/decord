// Module ID: 3420
// Function ID: 26651
// Name: eachWeekOfInterval
// Dependencies: []
// Exports: default

// Module 3420 (eachWeekOfInterval)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function eachWeekOfInterval(arg0, defaultResult2) {
  let time2;
  let obj = arg0;
  closure_3.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = closure_2.default(obj.start);
  defaultResult2 = closure_2.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    let defaultResult3 = closure_1.default(defaultResult1, defaultResult2);
    const defaultResult4 = closure_1.default(defaultResult2, defaultResult2);
    defaultResult3.setHours(15);
    defaultResult4.setHours(15);
    const time1 = defaultResult4.getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let setHoursResult2 = defaultResult3.setHours(0);
        let tmp14 = closure_2;
        let arr = items.push(closure_2.default(defaultResult3));
        let tmp16 = closure_0;
        let defaultResult5 = closure_0.default(defaultResult3, 1);
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
