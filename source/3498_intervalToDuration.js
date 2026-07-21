// Module ID: 3498
// Function ID: 26922
// Name: intervalToDuration
// Dependencies: []
// Exports: default

// Module 3498 (intervalToDuration)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));
let closure_2 = _interopRequireDefault(require(dependencyMap[2]));
let closure_3 = _interopRequireDefault(require(dependencyMap[3]));
let closure_4 = _interopRequireDefault(require(dependencyMap[4]));
let closure_5 = _interopRequireDefault(require(dependencyMap[5]));
let closure_6 = _interopRequireDefault(require(dependencyMap[6]));
let closure_7 = _interopRequireDefault(require(dependencyMap[7]));
let closure_8 = _interopRequireDefault(require(dependencyMap[8]));
let closure_9 = _interopRequireDefault(require(dependencyMap[9]));

export default function intervalToDuration(start) {
  closure_9.default(1, arguments);
  const defaultResult1 = closure_8.default(start.start);
  const defaultResult2 = closure_8.default(start.end);
  if (isNaN(defaultResult1.getTime())) {
    const _RangeError2 = RangeError;
    const rangeError = new RangeError("Start Date is invalid");
    throw rangeError;
  } else {
    const _isNaN = isNaN;
    if (isNaN(defaultResult2.getTime())) {
      const _RangeError = RangeError;
      const rangeError1 = new RangeError("End Date is invalid");
      throw rangeError1;
    } else {
      let obj = {};
      const _Math = Math;
      obj.years = Math.abs(closure_7.default(defaultResult2, defaultResult1));
      const defaultResult3 = closure_0.default(defaultResult2, defaultResult1);
      obj = {};
      obj.years = defaultResult3 * obj.years;
      const defaultResult4 = closure_1.default(defaultResult1, obj);
      const _Math2 = Math;
      obj.months = Math.abs(closure_5.default(defaultResult2, defaultResult4));
      const obj1 = { months: defaultResult3 * obj.months };
      const defaultResult5 = closure_1.default(defaultResult4, obj1);
      const _Math3 = Math;
      obj.days = Math.abs(closure_2.default(defaultResult2, defaultResult5));
      const obj2 = { days: defaultResult3 * obj.days };
      const defaultResult6 = closure_1.default(defaultResult5, obj2);
      const _Math4 = Math;
      obj.hours = Math.abs(closure_3.default(defaultResult2, defaultResult6));
      const obj3 = { hours: defaultResult3 * obj.hours };
      const defaultResult7 = closure_1.default(defaultResult6, obj3);
      const _Math5 = Math;
      obj.minutes = Math.abs(closure_4.default(defaultResult2, defaultResult7));
      const obj4 = { minutes: defaultResult3 * obj.minutes };
      const _Math6 = Math;
      obj.seconds = Math.abs(closure_6.default(defaultResult2, closure_1.default(defaultResult7, obj4)));
      return obj;
    }
  }
};
export default exports.default;
