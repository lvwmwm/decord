// Module ID: 3922
// Function ID: 3923
// Name: isSameMinute
// Dependencies: [3781, 3573]
// Exports: default

// Module 3922 (isSameMinute)
import startOfMinute from "startOfMinute" /* 3781 */;
import requiredArgs from "requiredArgs" /* 3573 */;

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
