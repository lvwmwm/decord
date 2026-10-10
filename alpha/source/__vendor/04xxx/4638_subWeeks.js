// Module ID: 4638
// Function ID: 4639
// Name: subWeeks
// Dependencies: [4203, 4367, 4200]
// Exports: default

// Module 4638 (subWeeks)
import toInteger_mod from "toInteger" /* 4203 */;
import addWeeks_mod from "addWeeks" /* 4367 */;
import requiredArgs_mod from "requiredArgs" /* 4200 */;

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
let addWeeks = addWeeks_mod;
if (!addWeeks) {
  tmp5 = { default: addWeeks };
  const obj2 = { default: addWeeks };
} else {
  tmp5 = addWeeks;
}
addWeeks = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addWeeks.default(arg0, -toInteger.default(arg1));
};
