// Module ID: 4831
// Function ID: 4832
// Name: secondsToHours
// Dependencies: [4423, 4601]
// Exports: default

// Module 4831 (secondsToHours)
import daysInWeek from "daysInWeek" /* 4601 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function secondsToHours(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.secondsInHour);
};
