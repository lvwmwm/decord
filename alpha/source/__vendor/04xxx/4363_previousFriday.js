// Module ID: 4363
// Function ID: 4364
// Name: previousFriday
// Dependencies: [3965, 4362]
// Exports: default

// Module 4363 (previousFriday)
import requiredArgs_mod from "requiredArgs" /* 3965 */;
import previousDay_mod from "previousDay" /* 4362 */;

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
