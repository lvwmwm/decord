// Module ID: 4457
// Function ID: 4458
// Name: differenceInQuarters
// Dependencies: [4453, 4256, 4449]
// Exports: default

// Module 4457 (differenceInQuarters)
import _mod4449 from "module_4449" /* 4449 */;
import differenceInMonths_mod from "differenceInMonths" /* 4453 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

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
  const getRoundingMethod = _mod4449.getRoundingMethod;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod(roundingMethod)(result);
};
