// Module ID: 4562
// Function ID: 4563
// Name: previousTuesday
// Dependencies: [4159, 4556]
// Exports: default

// Module 4562 (previousTuesday)
import requiredArgs_mod from "requiredArgs" /* 4159 */;
import previousDay_mod from "previousDay" /* 4556 */;

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

export default function previousTuesday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 2);
};
