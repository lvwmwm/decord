// Module ID: 4588
// Function ID: 4589
// Name: addQuarters
// Dependencies: [4426, 4571, 4423]
// Exports: default

// Module 4588 (addQuarters)
import toInteger_mod from "toInteger" /* 4426 */;
import addMonths_mod from "addMonths" /* 4571 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

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

export default function addQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addMonths.default(arg0, 3 * toInteger.default(arg1));
};
