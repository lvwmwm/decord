// Module ID: 4582
// Function ID: 4583
// Name: setSeconds
// Dependencies: [4162, 4158, 4159]
// Exports: default

// Module 4582 (setSeconds)
import toInteger_mod from "toInteger" /* 4162 */;
import toDate_mod from "toDate" /* 4158 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

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

export default function setSeconds(toInteger, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(toInteger);
  defaultResult1.setSeconds(toInteger.default(arg1));
  return defaultResult1;
};
