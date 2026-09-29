// Module ID: 4277
// Function ID: 4278
// Name: previousMonday
// Dependencies: [3878, 4275]
// Exports: default

// Module 4277 (previousMonday)
import requiredArgs_mod from "requiredArgs" /* 3878 */;
import previousDay_mod from "previousDay" /* 4275 */;

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

export default function previousMonday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 1);
};
export default exports.default;
