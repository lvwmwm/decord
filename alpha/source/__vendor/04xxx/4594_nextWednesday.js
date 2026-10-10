// Module ID: 4594
// Function ID: 4595
// Name: nextWednesday
// Dependencies: [4587, 4200]
// Exports: default

// Module 4594 (nextWednesday)
import nextDay_mod from "nextDay" /* 4587 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

let tmp3;
let tmp5;
let nextDay = nextDay_mod;
if (!nextDay) {
  tmp3 = { default: nextDay };
  const obj = { default: nextDay };
} else {
  tmp3 = nextDay;
}
nextDay = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function nextWednesday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 3);
};
