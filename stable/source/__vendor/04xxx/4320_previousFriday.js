// Module ID: 4320
// Function ID: 4321
// Name: previousFriday
// Dependencies: [3922, 4319]
// Exports: default

// Module 4320 (previousFriday)
import requiredArgs_mod from "requiredArgs" /* 3922 */;
import previousDay_mod from "previousDay" /* 4319 */;

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
let previousDay = previousDay_mod;
if (!previousDay) {
  tmp5 = { default: previousDay };
  const obj2 = { default: previousDay };
} else {
  tmp5 = previousDay;
}
previousDay = tmp5;

export default function previousFriday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 5);
};
