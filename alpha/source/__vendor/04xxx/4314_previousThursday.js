// Module ID: 4314
// Function ID: 4315
// Name: previousThursday
// Dependencies: [3912, 4309]
// Exports: default

// Module 4314 (previousThursday)
import requiredArgs_mod from "requiredArgs" /* 3912 */;
import previousDay_mod from "previousDay" /* 4309 */;

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

export default function previousThursday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 4);
};
export default exports.default;
