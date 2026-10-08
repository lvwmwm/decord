// Module ID: 4521
// Function ID: 4522
// Name: isToday
// Dependencies: [4337, 4157]
// Exports: default

// Module 4521 (isToday)
import isSameDay_mod from "isSameDay" /* 4337 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let tmp3;
let tmp5;
let isSameDay = isSameDay_mod;
if (!isSameDay) {
  tmp3 = { default: isSameDay };
  const obj = { default: isSameDay };
} else {
  tmp3 = isSameDay;
}
isSameDay = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isToday(arg0) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(arg0, Date.now());
};
