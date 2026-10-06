// Module ID: 3966
// Function ID: 3967
// Name: isSameUTCWeek
// Dependencies: [3965, 3967]
// Exports: default

// Module 3966 (isSameUTCWeek)
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import startOfUTCWeek_mod from "startOfUTCWeek" /* 3967 */;

let tmp3;
let tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let startOfUTCWeek = startOfUTCWeek_mod;
if (!startOfUTCWeek) {
  tmp5 = { default: startOfUTCWeek };
  const obj2 = { default: startOfUTCWeek };
} else {
  tmp5 = startOfUTCWeek;
}
startOfUTCWeek = tmp5;

export default function isSameUTCWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfUTCWeek.default(arg0, arg2);
  const defaultResult2 = startOfUTCWeek.default(arg1, arg2);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
};
