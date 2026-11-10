// Module ID: 4820
// Function ID: 4821
// Name: previousDay
// Dependencies: [4423, 4685, 4793]
// Exports: default

// Module 4820 (previousDay)
import requiredArgs_mod from "requiredArgs" /* 4423 */;
import getDay_mod from "getDay" /* 4685 */;
import subDays_mod from "subDays" /* 4793 */;

let tmp3;
let tmp5;
let tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let getDay = getDay_mod;
if (!getDay) {
  tmp5 = { default: getDay };
  const obj2 = { default: getDay };
} else {
  tmp5 = getDay;
}
getDay = tmp5;
let subDays = subDays_mod;
if (!subDays) {
  tmp7 = { default: subDays };
  const obj3 = { default: subDays };
} else {
  tmp7 = subDays;
}
subDays = tmp7;

export default function previousDay(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const diff = getDay.default(arg0) - arg1;
  let sum = diff;
  if (diff <= 0) {
    sum = diff + 7;
  }
  return subDays.default(arg0, sum);
};
