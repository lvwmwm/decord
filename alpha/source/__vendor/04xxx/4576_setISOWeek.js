// Module ID: 4576
// Function ID: 4577
// Name: setISOWeek
// Dependencies: [4160, 4156, 4428, 4157]
// Exports: default

// Module 4576 (setISOWeek)
import toInteger_mod from "toInteger" /* 4160 */;
import toDate_mod from "toDate" /* 4156 */;
import getISOWeek_mod from "getISOWeek" /* 4428 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
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
let getISOWeek = getISOWeek_mod;
if (!getISOWeek) {
  tmp7 = { default: getISOWeek };
  const obj3 = { default: getISOWeek };
} else {
  tmp7 = getISOWeek;
}
getISOWeek = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  const diff = getISOWeek.default(defaultResult1) - defaultResult2;
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
