// Module ID: 3560
// Function ID: 3561
// Name: differenceInMinutes
// Dependencies: [3556, 3364, 3542, 3557]
// Exports: default

// Module 3560 (differenceInMinutes)
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

export default function differenceInMinutes(arg0, arg1, roundingMethod) {
  tmp5.default(2, arguments);
  const result = tmp3.default(arg0, arg1) / require(3542) /* keys */.millisecondsInMinute;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3557) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
