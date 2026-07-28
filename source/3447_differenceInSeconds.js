// Module ID: 3447
// Function ID: 26741
// Name: differenceInSeconds
// Dependencies: [3437, 3245, 3438]
// Exports: default

// Module 3447 (differenceInSeconds)
import differenceInMilliseconds from "differenceInMilliseconds";
import requiredArgs from "requiredArgs";


export default function differenceInSeconds(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(defaultResult1, defaultResult2) / 1000;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3438) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
