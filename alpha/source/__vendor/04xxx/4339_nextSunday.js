// Module ID: 4339
// Function ID: 4340
// Name: nextSunday
// Dependencies: [4335, 3948]
// Exports: default

// Module 4339 (nextSunday)
import nextDay_mod from "nextDay" /* 4335 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let nextDay = nextDay_mod;
if (!nextDay) {
  const obj = { default: nextDay };
  let tmp3 = obj;
} else {
  tmp3 = nextDay;
}
nextDay = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function nextSunday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 0);
};
export default exports.default;
