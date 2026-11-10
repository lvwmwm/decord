// Module ID: 4824
// Function ID: 4825
// Name: previousSunday
// Dependencies: [4423, 4820]
// Exports: default

// Module 4824 (previousSunday)
import requiredArgs_mod from "requiredArgs" /* 4423 */;
import previousDay_mod from "previousDay" /* 4820 */;

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
