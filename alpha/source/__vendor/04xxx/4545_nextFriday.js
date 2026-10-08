// Module ID: 4545
// Function ID: 4546
// Name: nextFriday
// Dependencies: [4544, 4157]
// Exports: default

// Module 4545 (nextFriday)
import nextDay_mod from "nextDay" /* 4544 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

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

export default function nextFriday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 5);
};
