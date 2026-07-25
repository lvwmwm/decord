// Module ID: 3412
// Function ID: 26635
// Name: differenceInQuarters
// Dependencies: [3408, 3211, 3404]
// Exports: default

// Module 3412 (differenceInQuarters)
import differenceInMonths from "differenceInMonths";
import requiredArgs from "requiredArgs";


export default function differenceInQuarters(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMonths.default(defaultResult1, defaultResult2) / 3;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3404) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
