// Module ID: 4684
// Function ID: 4685
// Name: nextWednesday
// Dependencies: [4677, 4290]
// Exports: default

// Module 4684 (nextWednesday)
import nextDay_mod from "nextDay" /* 4677 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

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
