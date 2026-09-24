// Module ID: 4078
// Function ID: 4079
// Name: differenceInMinutes
// Dependencies: [4074, 3882, 4060, 4075]
// Exports: default

// Module 4078 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 4060 */;
import _mod4075 from "module_4075" /* 4075 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4074 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let differenceInMilliseconds = differenceInMilliseconds_mod;
if (!differenceInMilliseconds) {
  const obj = { default: differenceInMilliseconds };
  let tmp3 = obj;
} else {
  tmp3 = differenceInMilliseconds;
}
differenceInMilliseconds = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInMinutes(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(arg0, arg1) / daysInWeek.millisecondsInMinute;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod4075.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
