// Module ID: 4340
// Function ID: 4341
// Name: setISODay
// Dependencies: [3925, 3921, 4069, 4192, 3922]
// Exports: default

// Module 4340 (setISODay)
import toInteger_mod from "toInteger" /* 3925 */;
import toDate_mod from "toDate" /* 3921 */;
import addDays_mod from "addDays" /* 4069 */;
import getISODay_mod from "getISODay" /* 4192 */;
import requiredArgs_mod from "requiredArgs" /* 3922 */;

let tmp11;
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
let addDays = addDays_mod;
if (!addDays) {
  tmp7 = { default: addDays };
  const obj3 = { default: addDays };
} else {
  tmp7 = addDays;
}
addDays = tmp7;
let getISODay = getISODay_mod;
if (!getISODay) {
  tmp9 = { default: getISODay };
  const obj4 = { default: getISODay };
} else {
  tmp9 = getISODay;
}
getISODay = tmp9;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp11 = { default: requiredArgs };
  const obj5 = { default: requiredArgs };
} else {
  tmp11 = requiredArgs;
}
requiredArgs = tmp11;

export default function setISODay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  return addDays.default(defaultResult1, defaultResult2 - getISODay.default(defaultResult1));
};
