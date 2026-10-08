// Module ID: 4594
// Function ID: 4595
// Name: subSeconds
// Dependencies: [4160, 4323, 4157]
// Exports: default

// Module 4594 (subSeconds)
import toInteger_mod from "toInteger" /* 4160 */;
import addSeconds_mod from "addSeconds" /* 4323 */;
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
