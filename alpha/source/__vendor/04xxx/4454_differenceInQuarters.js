// Module ID: 4454
// Function ID: 4455
// Name: differenceInQuarters
// Dependencies: [4450, 4253, 4446]
// Exports: default

// Module 4454 (differenceInQuarters)
import _mod4446 from "module_4446" /* 4446 */;
import differenceInMonths_mod from "differenceInMonths" /* 4450 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let tmp3;
let tmp5;
let differenceInMonths = differenceInMonths_mod;
if (!differenceInMonths) {
  tmp3 = { default: differenceInMonths };
  const obj = { default: differenceInMonths };
} else {
  tmp3 = differenceInMonths;
}
differenceInMonths = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInQuarters(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMonths.default(arg0, arg1) / 3;
  roundingMethod = undefined;
  const getRoundingMethod = _mod4446.getRoundingMethod;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod(roundingMethod)(result);
};
