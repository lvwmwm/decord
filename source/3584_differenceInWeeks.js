// Module ID: 3584
// Function ID: 3585
// Name: differenceInWeeks
// Dependencies: [3571, 3381, 3574]
// Exports: default

// Module 3584 (differenceInWeeks)
import compareLocalAsc from "compareLocalAsc";
import requiredArgs from "requiredArgs";

if (!compareLocalAsc) {
  let obj = { default: null };
  obj[0] = compareLocalAsc;
  let tmp3 = obj;
} else {
  tmp3 = compareLocalAsc;
}
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let c3 = tmp5;

export default function differenceInWeeks(arg0, arg1, roundingMethod) {
  tmp5.default(2, arguments);
  const result = tmp3.default(arg0, arg1) / 7;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3574) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
