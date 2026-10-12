// Module ID: 4549
// Function ID: 4550
// Name: isSameMinute
// Dependencies: [4408, 4200]
// Exports: default

// Module 4549 (isSameMinute)
import startOfMinute_mod from "startOfMinute" /* 4408 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let tmp3;
let tmp5;
let startOfMinute = startOfMinute_mod;
if (!startOfMinute) {
  tmp3 = { default: startOfMinute };
  const obj = { default: startOfMinute };
} else {
  tmp3 = startOfMinute;
}
startOfMinute = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameMinute(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfMinute.default(arg0);
  const defaultResult2 = startOfMinute.default(arg1);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
};
