// Module ID: 4722
// Function ID: 4723
// Name: subMinutes
// Dependencies: [4451, 4287, 4290]
// Exports: default

// Module 4722 (subMinutes)
import addMinutes_mod from "addMinutes" /* 4451 */;
import requiredArgs_mod from "requiredArgs" /* 4287 */;
import toInteger_mod from "toInteger" /* 4290 */;

let tmp3;
let tmp5;
let tmp7;
let addMinutes = addMinutes_mod;
if (!addMinutes) {
  tmp3 = { default: addMinutes };
  const obj = { default: addMinutes };
} else {
  tmp3 = addMinutes;
}
addMinutes = tmp3;
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

export default function subMinutes(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addMinutes.default(arg0, -toInteger.default(arg1));
};
