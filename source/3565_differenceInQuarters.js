// Module ID: 3565
// Function ID: 3566
// Name: differenceInQuarters
// Dependencies: [3561, 3364, 3557]
// Exports: default

// Module 3565 (differenceInQuarters)
import differenceInMonths from "differenceInMonths";
import requiredArgs from "requiredArgs";

if (!differenceInMonths) {
  let obj = { default: null };
  obj[0] = differenceInMonths;
  let tmp3 = obj;
} else {
  tmp3 = differenceInMonths;
}
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
let c3 = tmp5;

export default function differenceInQuarters(arg0, arg1, roundingMethod) {
  tmp5.default(2, arguments);
  const result = tmp3.default(arg0, arg1) / 3;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return require(3557) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
