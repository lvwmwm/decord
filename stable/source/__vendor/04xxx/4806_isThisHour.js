// Module ID: 4806
// Function ID: 4807
// Name: isThisHour
// Dependencies: [4795, 4451]
// Exports: default

// Module 4806 (isThisHour)
import isSameHour_mod from "isSameHour" /* 4795 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

let tmp3;
let tmp5;
let isSameHour = isSameHour_mod;
if (!isSameHour) {
  tmp3 = { default: isSameHour };
  const obj = { default: isSameHour };
} else {
  tmp3 = isSameHour;
}
isSameHour = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisHour(arg0) {
  requiredArgs.default(1, arguments);
  return isSameHour.default(Date.now(), arg0);
};
