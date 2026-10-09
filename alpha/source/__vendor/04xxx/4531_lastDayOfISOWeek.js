// Module ID: 4531
// Function ID: 4532
// Name: lastDayOfISOWeek
// Dependencies: [4532, 4159]
// Exports: default

// Module 4531 (lastDayOfISOWeek)
import lastDayOfWeek_mod from "lastDayOfWeek" /* 4532 */;
import requiredArgs_mod from "requiredArgs" /* 4159 */;

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
