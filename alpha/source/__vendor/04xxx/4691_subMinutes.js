// Module ID: 4691
// Function ID: 4692
// Name: subMinutes
// Dependencies: [4420, 4256, 4259]
// Exports: default

// Module 4691 (subMinutes)
import addMinutes_mod from "addMinutes" /* 4420 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;
import toInteger_mod from "toInteger" /* 4259 */;

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
