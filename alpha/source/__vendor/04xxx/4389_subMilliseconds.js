// Module ID: 4389
// Function ID: 4390
// Name: subMilliseconds
// Dependencies: [4311, 4157, 4160]
// Exports: default

// Module 4389 (subMilliseconds)
import addMilliseconds_mod from "addMilliseconds" /* 4311 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;
import toInteger_mod from "toInteger" /* 4160 */;

let tmp3;
let tmp5;
let tmp7;
let addMilliseconds = addMilliseconds_mod;
if (!addMilliseconds) {
  tmp3 = { default: addMilliseconds };
  const obj = { default: addMilliseconds };
} else {
  tmp3 = addMilliseconds;
}
addMilliseconds = tmp3;
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

export default function subMilliseconds(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addMilliseconds.default(arg0, -toInteger.default(arg1));
};
