// Module ID: 4628
// Function ID: 4629
// Name: isYesterday
// Dependencies: [4439, 4629, 4259]
// Exports: default

// Module 4628 (isYesterday)
import isSameDay_mod from "isSameDay" /* 4439 */;
import subDays_mod from "subDays" /* 4629 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

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
