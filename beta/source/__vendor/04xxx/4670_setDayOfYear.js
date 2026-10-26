// Module ID: 4670
// Function ID: 4671
// Name: setDayOfYear
// Dependencies: [4258, 4254, 4255]
// Exports: default

// Module 4670 (setDayOfYear)
import toInteger_mod from "toInteger" /* 4258 */;
import toDate_mod from "toDate" /* 4254 */;
import requiredArgs_mod from "requiredArgs" /* 4255 */;

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

export default function setDayOfYear(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  defaultResult1.setMonth(0);
  defaultResult1.setDate(defaultResult2);
  return defaultResult1;
};
