// Module ID: 4589
// Function ID: 4590
// Name: nextMonday
// Dependencies: [4587, 4200]
// Exports: default

// Module 4589 (nextMonday)
import nextDay_mod from "nextDay" /* 4587 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

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

export default function nextMonday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 1);
};
