// Module ID: 4660
// Function ID: 4661
// Name: subDays
// Dependencies: [4437, 4290, 4293]
// Exports: default

// Module 4660 (subDays)
import addDays_mod from "addDays" /* 4437 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;
import toInteger_mod from "toInteger" /* 4293 */;

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

export default function subDays(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addDays.default(arg0, -toInteger.default(arg1));
};
