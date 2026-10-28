// Module ID: 4482
// Function ID: 4483
// Name: subISOWeekYears
// Dependencies: [4442, 4287, 4290]
// Exports: default

// Module 4482 (subISOWeekYears)
import addISOWeekYears_mod from "addISOWeekYears" /* 4442 */;
import requiredArgs_mod from "requiredArgs" /* 4287 */;
import toInteger_mod from "toInteger" /* 4290 */;

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
