// Module ID: 3413
// Function ID: 26639
// Name: differenceInSeconds
// Dependencies: [3403, 3211, 3404]
// Exports: default

// Module 3413 (differenceInSeconds)
import differenceInMilliseconds from "differenceInMilliseconds";
import requiredArgs from "requiredArgs";


export default function differenceInSeconds(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(defaultResult1, defaultResult2) / 1000;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3404) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
