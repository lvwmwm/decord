// Module ID: 4694
// Function ID: 4695
// Name: subWeeks
// Dependencies: [4259, 4423, 4256]
// Exports: default

// Module 4694 (subWeeks)
import toInteger_mod from "toInteger" /* 4259 */;
import addWeeks_mod from "addWeeks" /* 4423 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

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
