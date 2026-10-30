// Module ID: 4637
// Function ID: 4638
// Name: isSameWeek
// Dependencies: [4448, 4290]
// Exports: default

// Module 4637 (isSameWeek)
import startOfWeek_mod from "startOfWeek" /* 4448 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let tmp3;
let tmp5;
let startOfWeek = startOfWeek_mod;
if (!startOfWeek) {
  tmp3 = { default: startOfWeek };
  const obj = { default: startOfWeek };
} else {
  tmp3 = startOfWeek;
}
startOfWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameWeek(arg0, arg1, arg2) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfWeek.default(arg0, arg2);
  const defaultResult2 = startOfWeek.default(arg1, arg2);
  const time = defaultResult1.getTime();
  return time === defaultResult2.getTime();
};
