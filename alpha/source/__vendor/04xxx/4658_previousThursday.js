// Module ID: 4658
// Function ID: 4659
// Name: previousThursday
// Dependencies: [4256, 4653]
// Exports: default

// Module 4658 (previousThursday)
import requiredArgs_mod from "requiredArgs" /* 4256 */;
import previousDay_mod from "previousDay" /* 4653 */;

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
