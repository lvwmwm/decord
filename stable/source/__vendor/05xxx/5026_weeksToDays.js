// Module ID: 5026
// Function ID: 5027
// Name: weeksToDays
// Dependencies: [4586, 4764]
// Exports: default

// Module 5026 (weeksToDays)
import daysInWeek from "daysInWeek" /* 4764 */;
import requiredArgs_mod from "requiredArgs" /* 4586 */;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp3 = { default: requiredArgs };
  const obj = { default: requiredArgs };
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function weeksToDays(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 * daysInWeek.daysInWeek);
};
