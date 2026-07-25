// Module ID: 3414
// Function ID: 26641
// Name: differenceInWeeks
// Dependencies: [3401, 3211, 3404]
// Exports: default

// Module 3414 (differenceInWeeks)
import compareLocalAsc from "compareLocalAsc";
import requiredArgs from "requiredArgs";


export default function differenceInWeeks(defaultResult1, defaultResult2, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = compareLocalAsc.default(defaultResult1, defaultResult2) / 7;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3404) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
