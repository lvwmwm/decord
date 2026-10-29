// Module ID: 4680
// Function ID: 4681
// Name: nextSunday
// Dependencies: [4676, 4289]
// Exports: default

// Module 4680 (nextSunday)
import nextDay_mod from "nextDay" /* 4676 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

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

export default function nextSunday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 0);
};
