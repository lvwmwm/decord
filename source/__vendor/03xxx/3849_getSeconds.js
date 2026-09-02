// Module ID: 3849
// Function ID: 3850
// Name: getSeconds
// Dependencies: [3571, 3572]
// Exports: default

// Module 3849 (getSeconds)
import _typeof from "_typeof" /* 3571 */;
import requiredArgs from "requiredArgs" /* 3572 */;

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

export default function getSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getSeconds();
};
export default exports.default;
