// Module ID: 3643
// Function ID: 3644
// Name: differenceInSeconds
// Dependencies: [3633, 3441, 3634]
// Exports: default

// Module 3643 (differenceInSeconds)
import differenceInMilliseconds from "differenceInMilliseconds";
import requiredArgs from "requiredArgs";

if (!differenceInMilliseconds) {
  let obj = { default: null };
  obj[0] = differenceInMilliseconds;
  let tmp3 = obj;
} else {
  tmp3 = differenceInMilliseconds;
}
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let c3 = tmp5;

export default function differenceInSeconds(arg0, arg1, roundingMethod) {
  tmp5.default(2, arguments);
  const result = tmp3.default(arg0, arg1) / 1000;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3634) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
