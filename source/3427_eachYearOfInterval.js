// Module ID: 3427
// Function ID: 26672
// Name: eachYearOfInterval
// Dependencies: []
// Exports: default

// Module 3427 (eachYearOfInterval)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function eachYearOfInterval(arg0) {
  let time1;
  let obj = arg0;
  closure_1.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = closure_0.default(obj.start);
  const time = closure_0.default(obj.end).getTime();
  if (defaultResult1.getTime() <= time) {
    const items = [];
    defaultResult1.setHours(0, 0, 0, 0);
    defaultResult1.setMonth(0, 1);
    if (defaultResult1.getTime() <= time) {
      do {
        let tmp11 = closure_0;
        let arr = items.push(closure_0.default(defaultResult1));
        let setFullYearResult = defaultResult1.setFullYear(defaultResult1.getFullYear() + 1);
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
