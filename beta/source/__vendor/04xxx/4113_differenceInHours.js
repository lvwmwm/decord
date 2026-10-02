// Module ID: 4113
// Function ID: 4114
// Name: differenceInHours
// Dependencies: [4114, 3922, 4100, 4115]
// Exports: default

// Module 4113 (differenceInHours)
import daysInWeek from "daysInWeek" /* 4100 */;
import _mod4115 from "module_4115" /* 4115 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4114 */;
import requiredArgs_mod from "requiredArgs" /* 3922 */;

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

export default function differenceInHours(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = differenceInMilliseconds.default(arg0, arg1);
  const result = defaultResult1 / daysInWeek.millisecondsInHour;
  roundingMethod = undefined;
  const getRoundingMethod = _mod4115.getRoundingMethod;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return getRoundingMethod(roundingMethod)(result);
};
