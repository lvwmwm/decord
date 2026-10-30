// Module ID: 4470
// Function ID: 4471
// Name: isSameDay
// Dependencies: [4453, 4290]
// Exports: default

// Module 4470 (isSameDay)
import startOfDay_mod from "startOfDay" /* 4453 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let tmp3;
let tmp5;
let startOfDay = startOfDay_mod;
if (!startOfDay) {
  tmp3 = { default: startOfDay };
  const obj = { default: startOfDay };
} else {
  tmp3 = startOfDay;
}
startOfDay = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfDay.default(arg0);
  const defaultResult2 = startOfDay.default(arg1);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
};
