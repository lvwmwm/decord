// Module ID: 4669
// Function ID: 4670
// Name: subSeconds
// Dependencies: [4235, 4398, 4232]
// Exports: default

// Module 4669 (subSeconds)
import toInteger_mod from "toInteger" /* 4235 */;
import addSeconds_mod from "addSeconds" /* 4398 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

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
let addSeconds = addSeconds_mod;
if (!addSeconds) {
  tmp5 = { default: addSeconds };
  const obj2 = { default: addSeconds };
} else {
  tmp5 = addSeconds;
}
addSeconds = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subSeconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addSeconds.default(arg0, -toInteger.default(arg1));
};
