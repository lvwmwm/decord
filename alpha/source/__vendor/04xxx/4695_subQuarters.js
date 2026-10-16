// Module ID: 4695
// Function ID: 4696
// Name: subQuarters
// Dependencies: [4262, 4424, 4259]
// Exports: default

// Module 4695 (subQuarters)
import toInteger_mod from "toInteger" /* 4262 */;
import addQuarters_mod from "addQuarters" /* 4424 */;
import requiredArgs_mod from "requiredArgs" /* 4259 */;

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
let addQuarters = addQuarters_mod;
if (!addQuarters) {
  tmp5 = { default: addQuarters };
  const obj2 = { default: addQuarters };
} else {
  tmp5 = addQuarters;
}
addQuarters = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addQuarters.default(arg0, -toInteger.default(arg1));
};
