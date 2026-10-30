// Module ID: 4694
// Function ID: 4695
// Name: previousWednesday
// Dependencies: [4290, 4687]
// Exports: default

// Module 4694 (previousWednesday)
import requiredArgs_mod from "requiredArgs" /* 4290 */;
import previousDay_mod from "previousDay" /* 4687 */;

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
