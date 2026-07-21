// Module ID: 3576
// Function ID: 27734
// Name: isWithinInterval
// Dependencies: []
// Exports: default

// Module 3576 (isWithinInterval)
let closure_0 = _interopRequireDefault(require(dependencyMap[0]));
let closure_1 = _interopRequireDefault(require(dependencyMap[1]));

export default function isWithinInterval(defaultResult1, start) {
  closure_1.default(2, arguments);
  const time = closure_0.default(defaultResult1).getTime();
  defaultResult1 = closure_0.default(defaultResult1);
  const time1 = closure_0.default(start.start).getTime();
  const defaultResult2 = closure_0.default(start.start);
  const time2 = closure_0.default(start.end).getTime();
  if (time1 <= time2) {
    return time >= time1 && time <= time2;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Invalid interval");
    throw rangeError;
  }
  const defaultResult3 = closure_0.default(start.end);
};
export default exports.default;
