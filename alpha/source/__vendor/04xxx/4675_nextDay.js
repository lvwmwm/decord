// Module ID: 4675
// Function ID: 4676
// Name: nextDay
// Dependencies: [4435, 4550, 4288]
// Exports: default

// Module 4675 (nextDay)
import addDays_mod from "addDays" /* 4435 */;
import getDay_mod from "getDay" /* 4550 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

let tmp3;
let tmp5;
let tmp7;
let addDays = addDays_mod;
if (!addDays) {
  tmp3 = { default: addDays };
  const obj = { default: addDays };
} else {
  tmp3 = addDays;
}
addDays = tmp3;
let getDay = getDay_mod;
if (!getDay) {
  tmp5 = { default: getDay };
  const obj2 = { default: getDay };
} else {
  tmp5 = getDay;
}
getDay = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function nextDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = arg1 - getDay.default(arg0);
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return addDays.default(arg0, sum);
};
