// Module ID: 4690
// Function ID: 4691
// Name: subSeconds
// Dependencies: [4256, 4419, 4253]
// Exports: default

// Module 4690 (subSeconds)
import toInteger_mod from "toInteger" /* 4256 */;
import addSeconds_mod from "addSeconds" /* 4419 */;
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
