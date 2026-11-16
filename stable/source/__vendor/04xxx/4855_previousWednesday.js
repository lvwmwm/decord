// Module ID: 4855
// Function ID: 4856
// Name: previousWednesday
// Dependencies: [4451, 4848]
// Exports: default

// Module 4855 (previousWednesday)
import requiredArgs_mod from "requiredArgs" /* 4451 */;
import previousDay_mod from "previousDay" /* 4848 */;

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

export default function previousWednesday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 3);
};
