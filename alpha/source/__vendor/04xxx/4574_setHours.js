// Module ID: 4574
// Function ID: 4575
// Name: setHours
// Dependencies: [4160, 4156, 4157]
// Exports: default

// Module 4574 (setHours)
import toInteger_mod from "toInteger" /* 4160 */;
import toDate_mod from "toDate" /* 4156 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let tmp3;
let tmp5;
let tmp7;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp3 = { default: toInteger };
  const obj = { default: toInteger };
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setHours(toInteger, uTCMinutes) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(toInteger);
  defaultResult1.setHours(toInteger.default(uTCMinutes));
  return defaultResult1;
};
