// Module ID: 4709
// Function ID: 4710
// Name: setMilliseconds
// Dependencies: [4292, 4288, 4289]
// Exports: default

// Module 4709 (setMilliseconds)
import toInteger_mod from "toInteger" /* 4292 */;
import toDate_mod from "toDate" /* 4288 */;
import requiredArgs_mod from "requiredArgs" /* 4289 */;

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
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setMilliseconds(toInteger, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(toInteger);
  defaultResult1.setMilliseconds(toInteger.default(arg1));
  return defaultResult1;
};
