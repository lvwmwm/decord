// Module ID: 3934
// Function ID: 3935
// Name: nextSunday
// Dependencies: [3930, 3543]
// Exports: default

// Module 3934 (nextSunday)
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

export default function nextSunday(arg0) {
  requiredArgs.default(1, arguments);
  return nextDay.default(arg0, 0);
};
export default exports.default;
