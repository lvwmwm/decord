// Module ID: 3935
// Function ID: 3936
// Name: nextThursday
// Dependencies: [3930, 3543]
// Exports: default

// Module 3935 (nextThursday)
import nextDay from "nextDay" /* 3930 */;
import requiredArgs from "requiredArgs" /* 3543 */;

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

export default function nextThursday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 4);
};
export default exports.default;
