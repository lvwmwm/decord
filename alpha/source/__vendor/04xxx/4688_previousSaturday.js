// Module ID: 4688
// Function ID: 4689
// Name: previousSaturday
// Dependencies: [4288, 4685]
// Exports: default

// Module 4688 (previousSaturday)
import requiredArgs_mod from "requiredArgs" /* 4288 */;
import previousDay_mod from "previousDay" /* 4685 */;

let tmp3;
let tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let previousDay = previousDay_mod;
if (!previousDay) {
  tmp5 = { default: previousDay };
  const obj2 = { default: previousDay };
} else {
  tmp5 = previousDay;
}
previousDay = tmp5;

export default function previousSaturday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 6);
};
