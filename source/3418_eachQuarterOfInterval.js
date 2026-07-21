// Module ID: 3418
// Function ID: 26645
// Name: eachQuarterOfInterval
// Dependencies: []
// Exports: default

// Module 3418 (eachQuarterOfInterval)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));

export default function eachQuarterOfInterval(arg0) {
  let time2;
  let obj = arg0;
  closure_3.default(1, arguments);
  if (!arg0) {
    obj = {};
  }
  const defaultResult1 = closure_2.default(obj.start);
  const defaultResult2 = closure_2.default(obj.end);
  const time = defaultResult2.getTime();
  if (defaultResult1.getTime() <= time) {
    let defaultResult3 = closure_1.default(defaultResult1);
    const time1 = closure_1.default(defaultResult2).getTime();
    const items = [];
    if (defaultResult3.getTime() <= time1) {
      do {
        let tmp11 = closure_2;
        let arr = items.push(closure_2.default(defaultResult3));
        let tmp13 = closure_0;
        let defaultResult5 = closure_0.default(defaultResult3, 1);
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
