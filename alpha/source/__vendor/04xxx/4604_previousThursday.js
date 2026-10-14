// Module ID: 4604
// Function ID: 4605
// Name: previousThursday
// Dependencies: [4202, 4599]
// Exports: default

// Module 4604 (previousThursday)
import requiredArgs_mod from "requiredArgs" /* 4202 */;
import previousDay_mod from "previousDay" /* 4599 */;

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

export default function previousThursday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 4);
};
