// Module ID: 3910
// Function ID: 3911
// Name: isWednesday
// Dependencies: [3542, 3543]
// Exports: default

// Module 3910 (isWednesday)
import _typeof from "_typeof" /* 3542 */;
import requiredArgs from "requiredArgs" /* 3543 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isWednesday(arg0) {
  requiredArgs.default(1, arguments);
  return 3 === _typeof.default(arg0).getDay();
};
export default exports.default;
