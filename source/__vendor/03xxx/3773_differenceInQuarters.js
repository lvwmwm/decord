// Module ID: 3773
// Function ID: 3774
// Name: differenceInQuarters
// Dependencies: [3769, 3572, 3765]
// Exports: default

// Module 3773 (differenceInQuarters)
import getRoundingMethod from "getRoundingMethod" /* 3765 */;
import differenceInMonths from "differenceInMonths" /* 3769 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!differenceInMonths) {
  let obj = { default: null };
  obj[0] = differenceInMonths;
  let tmp3 = obj;
} else {
  tmp3 = differenceInMonths;
}
differenceInMonths = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInQuarters(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMonths.default(arg0, arg1) / 3;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
