// Module ID: 4595
// Function ID: 4596
// Name: subWeeks
// Dependencies: [4160, 4324, 4157]
// Exports: default

// Module 4595 (subWeeks)
import toInteger_mod from "toInteger" /* 4160 */;
import addWeeks_mod from "addWeeks" /* 4324 */;
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
