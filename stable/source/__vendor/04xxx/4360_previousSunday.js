// Module ID: 4360
// Function ID: 4361
// Name: previousSunday
// Dependencies: [3959, 4356]
// Exports: default

// Module 4360 (previousSunday)
import requiredArgs_mod from "requiredArgs" /* 3959 */;
import previousDay_mod from "previousDay" /* 4356 */;

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
