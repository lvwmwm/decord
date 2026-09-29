// Module ID: 4080
// Function ID: 4081
// Name: differenceInSeconds
// Dependencies: [4070, 3878, 4071]
// Exports: default

// Module 4080 (differenceInSeconds)
import _mod4071 from "module_4071" /* 4071 */;
import differenceInMilliseconds_mod from "differenceInMilliseconds" /* 4070 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

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

export default function differenceInSeconds(arg0, arg1, roundingMethod) {
  requiredArgs.default(2, arguments);
  const result = differenceInMilliseconds.default(arg0, arg1) / 1000;
  roundingMethod = undefined;
  if (null != roundingMethod) {
    roundingMethod = roundingMethod.roundingMethod;
  }
  return _mod4071.getRoundingMethod(roundingMethod)(result);
};
export default exports.default;
