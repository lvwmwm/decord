// Module ID: 4696
// Function ID: 4697
// Name: secondsToHours
// Dependencies: [4288, 4466]
// Exports: default

// Module 4696 (secondsToHours)
import daysInWeek from "daysInWeek" /* 4466 */;
import requiredArgs_mod from "requiredArgs" /* 4288 */;

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
