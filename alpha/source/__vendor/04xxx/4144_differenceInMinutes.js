// Module ID: 4144
// Function ID: 4145
// Name: differenceInMinutes
// Dependencies: [4140, 3948, 4126, 4141]
// Exports: default

// Module 4144 (differenceInMinutes)
import daysInWeek from "daysInWeek" /* 4126 */;
import _mod4141 from "module_4141" /* 4141 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4140 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

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
  return _mod4141.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
