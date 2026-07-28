// Module ID: 3446
// Function ID: 26738
// Name: differenceInQuarters
// Dependencies: [3442, 3245, 3438]
// Exports: default

// Module 3446 (differenceInQuarters)
import differenceInMonths from "differenceInMonths";
import requiredArgs from "requiredArgs";


export default function differenceInQuarters(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMonths.default(defaultResult1, defaultResult2) / 3;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3438) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
