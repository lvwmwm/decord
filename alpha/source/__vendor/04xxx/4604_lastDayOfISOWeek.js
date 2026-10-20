// Module ID: 4604
// Function ID: 4605
// Name: lastDayOfISOWeek
// Dependencies: [4605, 4232]
// Exports: default

// Module 4604 (lastDayOfISOWeek)
import lastDayOfWeek_mod from "lastDayOfWeek" /* 4605 */;
import requiredArgs_mod from "requiredArgs" /* 4232 */;

let tmp3;
let tmp5;
let lastDayOfWeek = lastDayOfWeek_mod;
if (!lastDayOfWeek) {
  tmp3 = { default: lastDayOfWeek };
  const obj = { default: lastDayOfWeek };
} else {
  tmp3 = lastDayOfWeek;
}
lastDayOfWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function lastDayOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return lastDayOfWeek.default(arg0, { weekStartsOn: 1 });
};
