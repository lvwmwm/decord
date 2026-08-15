// Module ID: 3674
// Function ID: 3675
// Name: differenceInQuarters
// Dependencies: [3670, 3473, 3666]
// Exports: default

// Module 3674 (differenceInQuarters)
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
  return require(3666) /* getRoundingMethod */.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
