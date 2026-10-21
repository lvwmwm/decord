// Module ID: 4670
// Function ID: 4671
// Name: setHours
// Dependencies: [4256, 4252, 4253]
// Exports: default

// Module 4670 (setHours)
import toInteger_mod from "toInteger" /* 4256 */;
import toDate_mod from "toDate" /* 4252 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

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
