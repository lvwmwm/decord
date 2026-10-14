// Module ID: 4339
// Function ID: 4340
// Name: millisecondsToMinutes
// Dependencies: [3959, 4137]
// Exports: default

// Module 4339 (millisecondsToMinutes)
import daysInWeek from "daysInWeek" /* 4137 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function millisecondsToMinutes(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.millisecondsInMinute);
};
