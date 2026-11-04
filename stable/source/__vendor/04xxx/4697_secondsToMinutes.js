// Module ID: 4697
// Function ID: 4698
// Name: secondsToMinutes
// Dependencies: [4287, 4465]
// Exports: default

// Module 4697 (secondsToMinutes)
import daysInWeek from "daysInWeek" /* 4465 */;
import requiredArgs_mod from "requiredArgs" /* 4287 */;

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
