// Module ID: 4589
// Function ID: 4590
// Name: addQuarters
// Dependencies: [4427, 4572, 4424]
// Exports: default

// Module 4589 (addQuarters)
import toInteger_mod from "toInteger" /* 4427 */;
import addMonths_mod from "addMonths" /* 4572 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

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
