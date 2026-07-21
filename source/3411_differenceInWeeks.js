// Module ID: 3411
// Function ID: 26619
// Name: differenceInWeeks
// Dependencies: [1946157069, 2281701389, 1929379852]
// Exports: default

// Module 3411 (differenceInWeeks)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));

export default function differenceInWeeks(defaultResult1, defaultResult2, roundingMethod) {
  closure_3.default(2, arguments);
  const result = closure_2.default(defaultResult1, defaultResult2) / 7;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(dependencyMap[2]).getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
