// Module ID: 4520
// Function ID: 4521
// Name: isThisWeek
// Dependencies: [4506, 4159]
// Exports: default

// Module 4520 (isThisWeek)
import isSameWeek_mod from "isSameWeek" /* 4506 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

let tmp3;
let tmp5;
let isSameWeek = isSameWeek_mod;
if (!isSameWeek) {
  tmp3 = { default: isSameWeek };
  const obj = { default: isSameWeek };
} else {
  tmp3 = isSameWeek;
}
isSameWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return isSameWeek.default(arg0, Date.now(), arg1);
};
