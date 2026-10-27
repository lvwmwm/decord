// Module ID: 4688
// Function ID: 4689
// Name: nextTuesday
// Dependencies: [4682, 4295]
// Exports: default

// Module 4688 (nextTuesday)
import nextDay_mod from "nextDay" /* 4682 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

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

export default function nextTuesday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 2);
};
