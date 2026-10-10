// Module ID: 4602
// Function ID: 4603
// Name: previousThursday
// Dependencies: [4200, 4597]
// Exports: default

// Module 4602 (previousThursday)
import requiredArgs_mod from "requiredArgs" /* 4200 */;
import previousDay_mod from "previousDay" /* 4597 */;

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
