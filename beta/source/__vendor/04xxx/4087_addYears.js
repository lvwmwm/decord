// Module ID: 4087
// Function ID: 4088
// Name: addYears
// Dependencies: [3922, 4067, 3919]
// Exports: default

// Module 4087 (addYears)
import toInteger_mod from "toInteger" /* 3922 */;
import addMonths_mod from "addMonths" /* 4067 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

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

export default function addYears(interval, arg1) {
  requiredArgs.default(2, arguments);
  return addMonths.default(interval, 12 * toInteger.default(arg1));
};
