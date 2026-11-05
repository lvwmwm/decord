// Module ID: 4812
// Function ID: 4813
// Name: nextFriday
// Dependencies: [4811, 4424]
// Exports: default

// Module 4812 (nextFriday)
import nextDay_mod from "nextDay" /* 4811 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

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
