// Module ID: 4297
// Function ID: 4298
// Name: monthsToQuarters
// Dependencies: [3912, 4090]
// Exports: default

// Module 4297 (monthsToQuarters)
import daysInWeek from "daysInWeek" /* 4090 */;
import requiredArgs_mod from "requiredArgs" /* 3912 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function monthsToQuarters(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.monthsInQuarter);
};
export default exports.default;
