// Module ID: 4526
// Function ID: 4527
// Name: isYesterday
// Dependencies: [4337, 4527, 4157]
// Exports: default

// Module 4526 (isYesterday)
import isSameDay_mod from "isSameDay" /* 4337 */;
import subDays_mod from "subDays" /* 4527 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let tmp3;
let tmp5;
let tmp7;
let isSameDay = isSameDay_mod;
if (!isSameDay) {
  tmp3 = { default: isSameDay };
  const obj = { default: isSameDay };
} else {
  tmp3 = isSameDay;
}
isSameDay = tmp3;
let subDays = subDays_mod;
if (!subDays) {
  tmp5 = { default: subDays };
  const obj2 = { default: subDays };
} else {
  tmp5 = subDays;
}
subDays = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isYesterday(arg0) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(arg0, subDays.default(Date.now(), 1));
};
