// Module ID: 3929
// Function ID: 3930
// Name: getTime
// Dependencies: [3650, 3651]
// Exports: default

// Module 3929 (getTime)
import _typeof from "_typeof" /* 3650 */;
import requiredArgs from "requiredArgs" /* 3651 */;

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

export default function getTime(arg0) {
  requiredArgs.default(1, arguments);
  return _typeof.default(arg0).getTime();
};
export default exports.default;
