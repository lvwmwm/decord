// Module ID: 4014
// Function ID: 4015
// Name: hoursToMinutes
// Dependencies: [3726, 3904]
// Exports: default

// Module 4014 (hoursToMinutes)
import daysInWeek from "daysInWeek" /* 3904 */;
import requiredArgs_mod from "requiredArgs" /* 3726 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function hoursToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.minutesInHour);
};
export default exports.default;
