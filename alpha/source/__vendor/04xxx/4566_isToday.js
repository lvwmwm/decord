// Module ID: 4566
// Function ID: 4567
// Name: isToday
// Dependencies: [4382, 4202]
// Exports: default

// Module 4566 (isToday)
import isSameDay_mod from "isSameDay" /* 4382 */;
import requiredArgs_mod from "requiredArgs" /* 4202 */;

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
