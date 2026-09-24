// Module ID: 4083
// Function ID: 4084
// Name: differenceInQuarters
// Dependencies: [4079, 3882, 4075]
// Exports: default

// Module 4083 (differenceInQuarters)
import _mod4075 from "module_4075" /* 4075 */;
import differenceInMonths_mod from "differenceInMonths" /* 4079 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

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
  return _mod4075.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
