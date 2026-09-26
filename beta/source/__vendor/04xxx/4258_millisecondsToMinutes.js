// Module ID: 4258
// Function ID: 4259
// Name: millisecondsToMinutes
// Dependencies: [3878, 4056]
// Exports: default

// Module 4258 (millisecondsToMinutes)
import daysInWeek from "daysInWeek" /* 4056 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInMinute);
};
export default exports.default;
