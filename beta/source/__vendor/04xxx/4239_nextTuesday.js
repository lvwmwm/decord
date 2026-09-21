// Module ID: 4239
// Function ID: 4240
// Name: nextTuesday
// Dependencies: [4233, 3846]
// Exports: default

// Module 4239 (nextTuesday)
import nextDay_mod from "nextDay" /* 4233 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

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

export default function nextTuesday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 2);
};
export default exports.default;
