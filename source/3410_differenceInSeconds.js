// Module ID: 3410
// Function ID: 26621
// Name: differenceInSeconds
// Dependencies: [1962934285, 2281701389, 1929379852]
// Exports: default

// Module 3410 (differenceInSeconds)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));

export default function differenceInSeconds(defaultResult1, defaultResult2, roundingMethod) {
  closure_3.default(2, arguments);
  const result = closure_2.default(defaultResult1, defaultResult2) / 1000;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(dependencyMap[2]).getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
