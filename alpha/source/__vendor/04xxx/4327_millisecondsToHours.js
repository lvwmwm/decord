// Module ID: 4327
// Function ID: 4328
// Name: millisecondsToHours
// Dependencies: [3948, 4126]
// Exports: default

// Module 4327 (millisecondsToHours)
import daysInWeek from "daysInWeek" /* 4126 */;
import requiredArgs_mod from "requiredArgs" /* 3948 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInHour);
};
export default exports.default;
