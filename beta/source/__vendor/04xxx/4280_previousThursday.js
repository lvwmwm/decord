// Module ID: 4280
// Function ID: 4281
// Name: previousThursday
// Dependencies: [3878, 4275]
// Exports: default

// Module 4280 (previousThursday)
import requiredArgs_mod from "requiredArgs" /* 3878 */;
import previousDay_mod from "previousDay" /* 4275 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;
let previousDay = previousDay_mod;
if (!previousDay) {
  const obj2 = { default: previousDay };
  let tmp5 = obj2;
} else {
  tmp5 = previousDay;
}
previousDay = tmp5;

export default function previousThursday(arg0) {
  requiredArgs.default(1, arguments);
  return previousDay.default(arg0, 4);
};
export default exports.default;
