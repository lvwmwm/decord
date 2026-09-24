// Module ID: 4085
// Function ID: 4086
// Name: differenceInWeeks
// Dependencies: [4072, 3882, 4075]
// Exports: default

// Module 4085 (differenceInWeeks)
import _mod4075 from "module_4075" /* 4075 */;
import compareLocalAsc_mod from "compareLocalAsc" /* 4072 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let compareLocalAsc = compareLocalAsc_mod;
if (!compareLocalAsc) {
  const obj = { default: compareLocalAsc };
  let tmp3 = obj;
} else {
  tmp3 = compareLocalAsc;
}
compareLocalAsc = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function differenceInWeeks(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = compareLocalAsc.default(arg0, arg1) / 7;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod4075.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
