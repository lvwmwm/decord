// Module ID: 3931
// Function ID: 3932
// Name: nextSaturday
// Dependencies: [3928, 3541]
// Exports: default

// Module 3931 (nextSaturday)
import nextDay from "nextDay" /* 3928 */;
import requiredArgs from "requiredArgs" /* 3541 */;

if (!nextDay) {
  let obj = { default: null };
  obj[0] = nextDay;
  let tmp3 = obj;
} else {
  tmp3 = nextDay;
}
nextDay = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function nextSaturday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 6);
};
export default exports.default;
