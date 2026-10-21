// Module ID: 4410
// Function ID: 4411
// Name: startOfISOWeek
// Dependencies: [4411, 4253]
// Exports: default

// Module 4410 (startOfISOWeek)
import startOfWeek_mod from "startOfWeek" /* 4411 */;
import requiredArgs_mod from "requiredArgs" /* 4253 */;

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

export default function startOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return startOfWeek.default(arg0, { weekStartsOn: 1 });
};
