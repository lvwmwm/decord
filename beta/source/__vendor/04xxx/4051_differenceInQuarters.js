// Module ID: 4051
// Function ID: 4052
// Name: differenceInQuarters
// Dependencies: [4047, 3850, 4043]
// Exports: default

// Module 4051 (differenceInQuarters)
import _mod4043 from "module_4043" /* 4043 */;
import differenceInMonths_mod from "differenceInMonths" /* 4047 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let differenceInMonths = differenceInMonths_mod;
if (!differenceInMonths) {
  const obj = { default: differenceInMonths };
  let tmp3 = obj;
} else {
  tmp3 = differenceInMonths;
}
differenceInMonths = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
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
  return _mod4043.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
