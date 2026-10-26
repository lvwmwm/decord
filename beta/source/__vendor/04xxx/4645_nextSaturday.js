// Module ID: 4645
// Function ID: 4646
// Name: nextSaturday
// Dependencies: [4642, 4255]
// Exports: default

// Module 4645 (nextSaturday)
import nextDay_mod from "nextDay" /* 4642 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

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

export default function nextSaturday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 6);
};
