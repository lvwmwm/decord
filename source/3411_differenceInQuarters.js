// Module ID: 3411
// Function ID: 26624
// Name: differenceInQuarters
// Dependencies: [3407, 3210, 3403]
// Exports: default

// Module 3411 (differenceInQuarters)
import differenceInMonths from "differenceInMonths";
import requiredArgs from "requiredArgs";


export default function differenceInQuarters(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMonths.default(defaultResult1, defaultResult2) / 3;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3403) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
