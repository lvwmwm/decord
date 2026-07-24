// Module ID: 3413
// Function ID: 26630
// Name: differenceInWeeks
// Dependencies: [3400, 3210, 3403]
// Exports: default

// Module 3413 (differenceInWeeks)
import compareLocalAsc from "compareLocalAsc";
import requiredArgs from "requiredArgs";


export default function differenceInWeeks(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = compareLocalAsc.default(defaultResult1, defaultResult2) / 7;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3403) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
