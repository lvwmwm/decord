// Module ID: 4256
// Function ID: 4257
// Name: quartersToYears
// Dependencies: [3850, 4028]
// Exports: default

// Module 4256 (quartersToYears)
import daysInWeek from "daysInWeek" /* 4028 */;
import requiredArgs_mod from "requiredArgs" /* 3850 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function quartersToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.quartersInYear);
};
export default exports.default;
