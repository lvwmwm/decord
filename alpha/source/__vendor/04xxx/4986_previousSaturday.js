// Module ID: 4986
// Function ID: 4987
// Name: previousSaturday
// Dependencies: [4586, 4983]
// Exports: default

// Module 4986 (previousSaturday)
import requiredArgs_mod from "requiredArgs" /* 4586 */;
import previousDay_mod from "previousDay" /* 4983 */;

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
