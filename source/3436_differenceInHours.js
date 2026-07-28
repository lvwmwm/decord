// Module ID: 3436
// Function ID: 26708
// Name: differenceInHours
// Dependencies: [3437, 3245, 3423, 3438]
// Exports: default

// Module 3436 (differenceInHours)
import differenceInMilliseconds from "differenceInMilliseconds";
import requiredArgs from "requiredArgs";


export default function differenceInHours(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(defaultResult1, defaultResult2) / require(3423) /* keys */.millisecondsInHour;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3438) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
