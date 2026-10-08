// Module ID: 4325
// Function ID: 4326
// Name: addYears
// Dependencies: [4160, 4305, 4157]
// Exports: default

// Module 4325 (addYears)
import toInteger_mod from "toInteger" /* 4160 */;
import addMonths_mod from "addMonths" /* 4305 */;
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
