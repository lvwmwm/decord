// Module ID: 4319
// Function ID: 4320
// Name: previousTuesday
// Dependencies: [3916, 4313]
// Exports: default

// Module 4319 (previousTuesday)
import requiredArgs_mod from "requiredArgs" /* 3916 */;
import previousDay_mod from "previousDay" /* 4313 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let previousDay = previousDay_mod;
if (!previousDay) {
  const obj2 = { default: previousDay };
  let tmp5 = obj2;
} else {
  tmp5 = previousDay;
}
previousDay = tmp5;

export default function previousTuesday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 2);
};
export default exports.default;
