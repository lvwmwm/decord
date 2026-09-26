// Module ID: 4227
// Function ID: 4228
// Dependencies: [4086, 3878]
// Exports: default

// Module 4227
import startOfMinute_mod from "startOfMinute" /* 4086 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let startOfMinute = startOfMinute_mod;
if (!startOfMinute) {
  const obj = { default: startOfMinute };
  let tmp3 = obj;
} else {
  tmp3 = startOfMinute;
}
startOfMinute = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
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
