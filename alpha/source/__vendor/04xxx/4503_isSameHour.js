// Module ID: 4503
// Function ID: 4504
// Name: isSameHour
// Dependencies: [4504, 4159]
// Exports: default

// Module 4503 (isSameHour)
import startOfHour_mod from "startOfHour" /* 4504 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let tmp3;
let tmp5;
let startOfHour = startOfHour_mod;
if (!startOfHour) {
  tmp3 = { default: startOfHour };
  const obj = { default: startOfHour };
} else {
  tmp3 = startOfHour;
}
startOfHour = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameHour(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfHour.default(arg0);
  const defaultResult2 = startOfHour.default(arg1);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
};
