// Module ID: 4321
// Function ID: 4322
// Name: previousThursday
// Dependencies: [3919, 4316]
// Exports: default

// Module 4321 (previousThursday)
import requiredArgs_mod from "requiredArgs" /* 3919 */;
import previousDay_mod from "previousDay" /* 4316 */;

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
