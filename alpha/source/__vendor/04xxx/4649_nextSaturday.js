// Module ID: 4649
// Function ID: 4650
// Name: nextSaturday
// Dependencies: [4646, 4259]
// Exports: default

// Module 4649 (nextSaturday)
import nextDay_mod from "nextDay" /* 4646 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

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
