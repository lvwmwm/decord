// Module ID: 4271
// Function ID: 4272
// Name: nextMonday
// Dependencies: [4269, 3882]
// Exports: default

// Module 4271 (nextMonday)
import nextDay_mod from "nextDay" /* 4269 */;
import requiredArgs_mod from "requiredArgs" /* 3882 */;

let nextDay = nextDay_mod;
if (!nextDay) {
  const obj = { default: nextDay };
  let tmp3 = obj;
} else {
  tmp3 = nextDay;
}
nextDay = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function nextMonday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 1);
};
export default exports.default;
