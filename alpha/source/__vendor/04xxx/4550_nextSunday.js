// Module ID: 4550
// Function ID: 4551
// Name: nextSunday
// Dependencies: [4546, 4159]
// Exports: default

// Module 4550 (nextSunday)
import nextDay_mod from "nextDay" /* 4546 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

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
