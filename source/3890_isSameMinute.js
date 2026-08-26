// Module ID: 3890
// Function ID: 3891
// Name: isSameMinute
// Dependencies: [3749, 3541]
// Exports: default

// Module 3890 (isSameMinute)
import startOfMinute from "startOfMinute" /* 3749 */;
import requiredArgs from "requiredArgs" /* 3541 */;

if (!startOfMinute) {
  let obj = { default: null };
  obj[0] = startOfMinute;
  let tmp3 = obj;
} else {
  tmp3 = startOfMinute;
}
startOfMinute = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameMinute(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfMinute.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfMinute.default(arg1).getTime();
};
export default exports.default;
