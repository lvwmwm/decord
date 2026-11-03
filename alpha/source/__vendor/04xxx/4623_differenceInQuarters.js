// Module ID: 4623
// Function ID: 4624
// Name: differenceInQuarters
// Dependencies: [4619, 4422, 4615]
// Exports: default

// Module 4623 (differenceInQuarters)
import _mod4615 from "module_4615" /* 4615 */;
import differenceInMonths_mod from "differenceInMonths" /* 4619 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

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
  const getRoundingMethod = _mod4615.getRoundingMethod;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod(roundingMethod)(result);
};
