// Module ID: 4685
// Function ID: 4686
// Name: subMonths
// Dependencies: [4256, 4401, 4253]
// Exports: default

// Module 4685 (subMonths)
import toInteger_mod from "toInteger" /* 4256 */;
import addMonths_mod from "addMonths" /* 4401 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

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
let addMonths = addMonths_mod;
if (!addMonths) {
  tmp5 = { default: addMonths };
  const obj2 = { default: addMonths };
} else {
  tmp5 = addMonths;
}
addMonths = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subMonths(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addMonths.default(arg0, -toInteger.default(arg1));
};
