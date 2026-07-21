// Module ID: 3399
// Function ID: 26588
// Name: differenceInHours
// Dependencies: []
// Exports: default

// Module 3399 (differenceInHours)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));

export default function differenceInHours(defaultResult1, defaultResult2, roundingMethod) {
  closure_3.default(2, arguments);
  const result = closure_2.default(defaultResult1, defaultResult2) / require(dependencyMap[2]).millisecondsInHour;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(dependencyMap[3]).getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
