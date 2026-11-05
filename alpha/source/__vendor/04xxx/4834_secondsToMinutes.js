// Module ID: 4834
// Function ID: 4835
// Name: secondsToMinutes
// Dependencies: [4424, 4602]
// Exports: default

// Module 4834 (secondsToMinutes)
import daysInWeek from "daysInWeek" /* 4602 */;
import requiredArgs_mod from "requiredArgs" /* 4424 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.secondsInMinute);
};
