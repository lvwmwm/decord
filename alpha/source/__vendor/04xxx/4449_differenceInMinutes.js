// Module ID: 4449
// Function ID: 4450
// Name: differenceInMinutes
// Dependencies: [4445, 4253, 4431, 4446]
// Exports: default

// Module 4449 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 4431 */;
import _mod4446 from "module_4446" /* 4446 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4445 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

let tmp3;
let tmp5;
let differenceInMilliseconds = differenceInMilliseconds_mod;
if (!differenceInMilliseconds) {
  tmp3 = { default: differenceInMilliseconds };
  const obj = { default: differenceInMilliseconds };
} else {
  tmp3 = differenceInMilliseconds;
}
differenceInMilliseconds = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInMinutes(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = differenceInMilliseconds.default(arg0, arg1);
  const result = defaultResult1 / daysInWeek.millisecondsInMinute;
  roundingMethod = undefined;
  const getRoundingMethod = _mod4446.getRoundingMethod;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod(roundingMethod)(result);
};
