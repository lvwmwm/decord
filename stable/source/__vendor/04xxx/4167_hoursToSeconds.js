// Module ID: 4167
// Function ID: 4168
// Name: hoursToSeconds
// Dependencies: [3878, 4056]
// Exports: default

// Module 4167 (hoursToSeconds)
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

export default function hoursToSeconds(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.secondsInHour);
};
export default exports.default;
