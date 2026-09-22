// Module ID: 4132
// Function ID: 4133
// Name: quartersToYears
// Dependencies: [3726, 3904]
// Exports: default

// Module 4132 (quartersToYears)
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

export default function quartersToYears(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(arg0 / daysInWeek.quartersInYear);
};
export default exports.default;
