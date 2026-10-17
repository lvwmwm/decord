// Module ID: 4659
// Function ID: 4660
// Name: isToday
// Dependencies: [4475, 4295]
// Exports: default

// Module 4659 (isToday)
import isSameDay_mod from "isSameDay" /* 4475 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

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
