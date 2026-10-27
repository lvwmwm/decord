// Module ID: 4462
// Function ID: 4463
// Name: addWeeks
// Dependencies: [4298, 4442, 4295]
// Exports: default

// Module 4462 (addWeeks)
import toInteger_mod from "toInteger" /* 4298 */;
import addDays_mod from "addDays" /* 4442 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

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
let addDays = addDays_mod;
if (!addDays) {
  tmp5 = { default: addDays };
  const obj2 = { default: addDays };
} else {
  tmp5 = addDays;
}
addDays = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addDays.default(arg0, 7 * toInteger.default(arg1));
};
