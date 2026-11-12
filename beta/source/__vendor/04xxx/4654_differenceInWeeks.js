// Module ID: 4654
// Function ID: 4655
// Name: differenceInWeeks
// Dependencies: [4641, 4451, 4644]
// Exports: default

// Module 4654 (differenceInWeeks)
import _mod4644 from "module_4644" /* 4644 */;
import differenceInDays_mod from "differenceInDays" /* 4641 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

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
  const getRoundingMethod = _mod4644.getRoundingMethod;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod(roundingMethod)(result);
};
