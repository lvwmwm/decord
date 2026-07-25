// Module ID: 3407
// Function ID: 26620
// Name: differenceInMinutes
// Dependencies: [3403, 3211, 3389, 3404]
// Exports: default

// Module 3407 (differenceInMinutes)
import differenceInMilliseconds from "differenceInMilliseconds";
import requiredArgs from "requiredArgs";


export default function differenceInMinutes(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(defaultResult1, defaultResult2) / require(3389) /* keys */.millisecondsInMinute;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3404) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
