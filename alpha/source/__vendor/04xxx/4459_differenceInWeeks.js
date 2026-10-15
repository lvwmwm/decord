// Module ID: 4459
// Function ID: 4460
// Name: differenceInWeeks
// Dependencies: [4446, 4256, 4449]
// Exports: default

// Module 4459 (differenceInWeeks)
import _mod4449 from "module_4449" /* 4449 */;
import differenceInDays_mod from "differenceInDays" /* 4446 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let tmp3;
let tmp5;
let differenceInDays = differenceInDays_mod;
if (!differenceInDays) {
  tmp3 = { default: differenceInDays };
  const obj = { default: differenceInDays };
} else {
  tmp3 = differenceInDays;
}
differenceInDays = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInWeeks(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInDays.default(arg0, arg1) / 7;
  roundingMethod = undefined;
  const getRoundingMethod = _mod4449.getRoundingMethod;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod(roundingMethod)(result);
};
