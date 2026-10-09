// Module ID: 4508
// Function ID: 4509
// Name: isSameMinute
// Dependencies: [4367, 4159]
// Exports: default

// Module 4508 (isSameMinute)
import startOfMinute_mod from "startOfMinute" /* 4367 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

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
