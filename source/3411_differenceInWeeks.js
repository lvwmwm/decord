// Module ID: 3411
// Function ID: 26624
// Name: differenceInWeeks
// Dependencies: [1946157069, 3207, 3444]
// Exports: default

// Module 3411 (differenceInWeeks)
import _typeof from "_typeof";

let closure_2 = _interopRequireDefault(require(dependencyMap[0]));

export default function differenceInWeeks(defaultResult1, defaultResult2, roundingMethod) {
  _typeof.default(2, arguments);
  const result = closure_2.default(defaultResult1, defaultResult2) / 7;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(dependencyMap[2]).getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
