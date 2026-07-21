// Module ID: 3417
// Function ID: 26642
// Name: eachMonthOfInterval
// Dependencies: []
// Exports: default

// Module 3417 (eachMonthOfInterval)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function eachMonthOfInterval(arg0) {
  let time1;
  let obj = arg0;
  closure_1.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = closure_0.default(obj.start);
  const time = closure_0.default(obj.end).getTime();
  const items = [];
  if (defaultResult1.getTime() <= time) {
    defaultResult1.setHours(0, 0, 0, 0);
    defaultResult1.setDate(1);
    if (defaultResult1.getTime() <= time) {
      do {
        let tmp11 = closure_0;
        let arr = items.push(closure_0.default(defaultResult1));
        let setMonthResult = defaultResult1.setMonth(defaultResult1.getMonth() + 1);
        time1 = defaultResult1.getTime();
      } while (time1 <= time);
    }
    return items;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
  const defaultResult2 = closure_0.default(obj.end);
};
export default exports.default;
