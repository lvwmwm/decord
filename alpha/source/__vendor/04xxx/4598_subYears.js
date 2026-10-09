// Module ID: 4598
// Function ID: 4599
// Name: subYears
// Dependencies: [4162, 4327, 4159]
// Exports: default

// Module 4598 (subYears)
import toInteger_mod from "toInteger" /* 4162 */;
import addYears_mod from "addYears" /* 4327 */;
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
let addYears = addYears_mod;
if (!addYears) {
  tmp5 = { default: addYears };
  const obj2 = { default: addYears };
} else {
  tmp5 = addYears;
}
addYears = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function subYears(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addYears.default(arg0, -toInteger.default(arg1));
};
