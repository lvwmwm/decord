// Module ID: 4633
// Function ID: 4634
// Name: previousSunday
// Dependencies: [4232, 4629]
// Exports: default

// Module 4633 (previousSunday)
import requiredArgs_mod from "requiredArgs" /* 4232 */;
import previousDay_mod from "previousDay" /* 4629 */;

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

export default function previousSunday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 0);
};
