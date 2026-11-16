// Module ID: 4859
// Function ID: 4860
// Name: secondsToHours
// Dependencies: [4451, 4629]
// Exports: default

// Module 4859 (secondsToHours)
import daysInWeek from "daysInWeek" /* 4629 */;
import requiredArgs_mod from "requiredArgs" /* 4451 */;

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
