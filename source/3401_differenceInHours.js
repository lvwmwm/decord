// Module ID: 3401
// Function ID: 26594
// Name: differenceInHours
// Dependencies: [3402, 3210, 3388, 3403]
// Exports: default

// Module 3401 (differenceInHours)
import differenceInMilliseconds from "differenceInMilliseconds";
import requiredArgs from "requiredArgs";


export default function differenceInHours(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(defaultResult1, defaultResult2) / require(3388) /* keys */.millisecondsInHour;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3403) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
