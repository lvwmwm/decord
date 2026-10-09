// Module ID: 4505
// Function ID: 4506
// Name: isSameISOWeek
// Dependencies: [4506, 4159]
// Exports: default

// Module 4505 (isSameISOWeek)
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

export default function isSameISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return isSameWeek.default(arg0, arg1, { weekStartsOn: 1 });
};
