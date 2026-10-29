// Module ID: 4484
// Function ID: 4485
// Name: subISOWeekYears
// Dependencies: [4444, 4289, 4292]
// Exports: default

// Module 4484 (subISOWeekYears)
import addISOWeekYears_mod from "addISOWeekYears" /* 4444 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;
import toInteger_mod from "toInteger" /* 4292 */;

let tmp3;
let tmp5;
let tmp7;
let addISOWeekYears = addISOWeekYears_mod;
if (!addISOWeekYears) {
  tmp3 = { default: addISOWeekYears };
  const obj = { default: addISOWeekYears };
} else {
  tmp3 = addISOWeekYears;
}
addISOWeekYears = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp7 = { default: toInteger };
  const obj3 = { default: toInteger };
} else {
  tmp7 = toInteger;
}
toInteger = tmp7;

export default function subISOWeekYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addISOWeekYears.default(arg0, -toInteger.default(arg1));
};
