// Module ID: 3402
// Function ID: 26605
// Name: differenceInHours
// Dependencies: [3403, 3211, 3389, 3404]
// Exports: default

// Module 3402 (differenceInHours)
import differenceInMilliseconds from "differenceInMilliseconds";
import requiredArgs from "requiredArgs";


export default function differenceInHours(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(defaultResult1, defaultResult2) / require(3389) /* keys */.millisecondsInHour;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3404) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
