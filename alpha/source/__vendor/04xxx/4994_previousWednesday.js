// Module ID: 4994
// Function ID: 4995
// Name: previousWednesday
// Dependencies: [4590, 4987]
// Exports: default

// Module 4994 (previousWednesday)
import requiredArgs_mod from "requiredArgs" /* 4590 */;
import previousDay_mod from "previousDay" /* 4987 */;

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
