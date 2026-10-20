// Module ID: 4565
// Function ID: 4566
// Name: isTomorrow
// Dependencies: [4347, 4380, 4200]
// Exports: default

// Module 4565 (isTomorrow)
import addDays_mod from "addDays" /* 4347 */;
import isSameDay_mod from "isSameDay" /* 4380 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let tmp3;
let tmp5;
let tmp7;
let addDays = addDays_mod;
if (!addDays) {
  tmp3 = { default: addDays };
  const obj = { default: addDays };
} else {
  tmp3 = addDays;
}
addDays = tmp3;
let isSameDay = isSameDay_mod;
if (!isSameDay) {
  tmp5 = { default: isSameDay };
  const obj2 = { default: isSameDay };
} else {
  tmp5 = isSameDay;
}
isSameDay = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isTomorrow(arg0) {
  requiredArgs.default(1, arguments);
  return isSameDay.default(arg0, addDays.default(Date.now(), 1));
};
