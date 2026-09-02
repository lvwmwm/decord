// Module ID: 3973
// Function ID: 3974
// Name: previousSunday
// Dependencies: [3572, 3969]
// Exports: default

// Module 3973 (previousSunday)
import requiredArgs from "requiredArgs" /* 3572 */;
import previousDay from "previousDay" /* 3969 */;

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
if (!previousDay) {
  obj = { default: null };
  obj[0] = previousDay;
  let tmp5 = obj;
} else {
  tmp5 = previousDay;
}
previousDay = tmp5;

export default function previousSunday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 0);
};
export default exports.default;
