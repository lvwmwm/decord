// Module ID: 4813
// Function ID: 4814
// Name: nextSunday
// Dependencies: [4809, 4422]
// Exports: default

// Module 4813 (nextSunday)
import nextDay_mod from "nextDay" /* 4809 */;
import requiredArgs_mod from "requiredArgs" /* 4422 */;

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
