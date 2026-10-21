// Module ID: 4654
// Function ID: 4655
// Name: previousSunday
// Dependencies: [4253, 4650]
// Exports: default

// Module 4654 (previousSunday)
import requiredArgs_mod from "requiredArgs" /* 4253 */;
import previousDay_mod from "previousDay" /* 4650 */;

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
