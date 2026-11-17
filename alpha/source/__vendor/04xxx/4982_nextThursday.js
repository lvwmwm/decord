// Module ID: 4982
// Function ID: 4983
// Name: nextThursday
// Dependencies: [4977, 4590]
// Exports: default

// Module 4982 (nextThursday)
import nextDay_mod from "nextDay" /* 4977 */;
import requiredArgs_mod from "requiredArgs" /* 4590 */;

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

export default function nextThursday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 4);
};
