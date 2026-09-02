// Module ID: 3742
// Function ID: 3743
// Name: clamp
// Dependencies: [3743, 3744, 3572]
// Exports: default

// Module 3742 (clamp)
import _typeof from "_typeof" /* 3743 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!_typeof) {
  let obj = { default: null };
  obj[0] = _typeof;
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function clamp(arg0, arg1) {
  ({ start, end } = arg1);
  requiredArgs.default(2, arguments);
  const items = [arg0, start];
  const items1 = [_typeof.default(items), end];
  return _typeof.default(items1);
};
export default exports.default;
