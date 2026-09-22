// Module ID: 4127
// Function ID: 4128
// Name: previousSunday
// Dependencies: [3726, 4123]
// Exports: default

// Module 4127 (previousSunday)
import requiredArgs_mod from "requiredArgs" /* 3726 */;
import previousDay_mod from "previousDay" /* 4123 */;

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

export default function previousSunday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 0);
};
export default exports.default;
