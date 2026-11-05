// Module ID: 4656
// Function ID: 4657
// Name: subMilliseconds
// Dependencies: [4578, 4424, 4427]
// Exports: default

// Module 4656 (subMilliseconds)
import addMilliseconds_mod from "addMilliseconds" /* 4578 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;
import toInteger_mod from "toInteger" /* 4427 */;

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
