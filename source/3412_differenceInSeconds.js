// Module ID: 3412
// Function ID: 26626
// Name: differenceInSeconds
// Dependencies: [3402, 3210, 3403]
// Exports: default

// Module 3412 (differenceInSeconds)
import differenceInMilliseconds from "differenceInMilliseconds";
import requiredArgs from "requiredArgs";


export default function differenceInSeconds(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(defaultResult1, defaultResult2) / 1000;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3403) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
