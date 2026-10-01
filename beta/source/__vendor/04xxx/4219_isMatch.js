// Module ID: 4219
// Function ID: 4220
// Name: isMatch
// Dependencies: [4220, 4100, 3919]
// Exports: default

// Module 4219 (isMatch)
import parse_mod from "parse" /* 4220 */;
import isValid_mod from "isValid" /* 4100 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

let tmp3;
let tmp5;
let tmp7;
let parse = parse_mod;
if (!parse) {
  tmp3 = { default: parse };
  const obj = { default: parse };
} else {
  tmp3 = parse;
}
parse = tmp3;
let isValid = isValid_mod;
if (!isValid) {
  tmp5 = { default: isValid };
  const obj2 = { default: isValid };
} else {
  tmp5 = isValid;
}
isValid = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function isMatch(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const _default = isValid.default;
  const _default2 = parse.default;
  const date = new Date();
  return _default(_default2(arg0, arg1, date, arg2));
};
