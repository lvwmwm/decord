// Module ID: 4661
// Function ID: 4662
// Name: previousThursday
// Dependencies: [4259, 4656]
// Exports: default

// Module 4661 (previousThursday)
import requiredArgs_mod from "requiredArgs" /* 4259 */;
import previousDay_mod from "previousDay" /* 4656 */;

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
