// Module ID: 3404
// Function ID: 26598
// Name: differenceInMinutes
// Dependencies: []
// Exports: default

// Module 3404 (differenceInMinutes)
let closure_2 = _interopRequireDefault(require(dependencyMap[0]));
let closure_3 = _interopRequireDefault(require(dependencyMap[1]));

export default function differenceInMinutes(defaultResult1, defaultResult2, roundingMethod) {
  closure_3.default(2, arguments);
  const result = closure_2.default(defaultResult1, defaultResult2) / require(dependencyMap[2]).millisecondsInMinute;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(dependencyMap[3]).getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
