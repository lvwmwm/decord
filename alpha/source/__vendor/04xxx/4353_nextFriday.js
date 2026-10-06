// Module ID: 4353
// Function ID: 4354
// Name: nextFriday
// Dependencies: [4352, 3965]
// Exports: default

// Module 4353 (nextFriday)
import nextDay_mod from "nextDay" /* 4352 */;
import requiredArgs_mod from "requiredArgs" /* 3965 */;

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
