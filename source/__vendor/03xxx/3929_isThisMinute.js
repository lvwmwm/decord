// Module ID: 3929
// Function ID: 3930
// Name: isThisMinute
// Dependencies: [3921, 3572]
// Exports: default

// Module 3929 (isThisMinute)
import isSameMinute from "isSameMinute" /* 3921 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!isSameMinute) {
  let obj = { default: null };
  obj[0] = isSameMinute;
  let tmp3 = obj;
} else {
  tmp3 = isSameMinute;
}
isSameMinute = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisMinute(arg0) {
  requiredArgs.default(1, arguments);
  return isSameMinute.default(Date.now(), arg0);
};
export default exports.default;
