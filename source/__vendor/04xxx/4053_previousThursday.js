// Module ID: 4053
// Function ID: 4054
// Name: previousThursday
// Dependencies: [3651, 4048]
// Exports: default

// Module 4053 (previousThursday)
import requiredArgs from "requiredArgs" /* 3651 */;
import previousDay from "previousDay" /* 4048 */;

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

export default function previousThursday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 4);
};
export default exports.default;
