// Module ID: 3409
// Function ID: 26618
// Name: differenceInQuarters
// Dependencies: []
// Exports: default

// Module 3409 (differenceInQuarters)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));

export default function differenceInQuarters(defaultResult1, defaultResult2, roundingMethod) {
  closure_3.default(2, arguments);
  const result = closure_2.default(defaultResult1, defaultResult2) / 3;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(dependencyMap[2]).getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
