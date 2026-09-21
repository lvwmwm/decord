// Module ID: 4023
// Function ID: 4024
// Name: daysToWeeks
// Dependencies: [3846, 4024]
// Exports: default

// Module 4023 (daysToWeeks)
import daysInWeek from "daysInWeek" /* 4024 */;
import requiredArgs_mod from "requiredArgs" /* 3846 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function daysToWeeks(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.daysInWeek);
};
export default exports.default;
