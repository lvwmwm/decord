// Module ID: 4599
// Function ID: 4600
// Name: isSameHour
// Dependencies: [4600, 4255]
// Exports: default

// Module 4599 (isSameHour)
import startOfHour_mod from "startOfHour" /* 4600 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

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
