// Module ID: 4823
// Function ID: 4824
// Name: previousSunday
// Dependencies: [4422, 4819]
// Exports: default

// Module 4823 (previousSunday)
import requiredArgs_mod from "requiredArgs" /* 4422 */;
import previousDay_mod from "previousDay" /* 4819 */;

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
