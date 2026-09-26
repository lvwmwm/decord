// Module ID: 4272
// Function ID: 4273
// Name: nextWednesday
// Dependencies: [4265, 3878]
// Exports: default

// Module 4272 (nextWednesday)
import nextDay_mod from "nextDay" /* 4265 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

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

export default function nextWednesday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 3);
};
export default exports.default;
