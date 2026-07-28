// Module ID: 3448
// Function ID: 26744
// Name: differenceInWeeks
// Dependencies: [3435, 3245, 3438]
// Exports: default

// Module 3448 (differenceInWeeks)
import compareLocalAsc from "compareLocalAsc";
import requiredArgs from "requiredArgs";


export default function differenceInWeeks(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = compareLocalAsc.default(defaultResult1, defaultResult2) / 7;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3438) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
