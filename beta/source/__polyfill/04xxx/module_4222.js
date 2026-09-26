// Module ID: 4222
// Function ID: 4223
// Dependencies: [4223, 3878]
// Exports: default

// Module 4222
import startOfHour_mod from "startOfHour" /* 4223 */;
import requiredArgs_mod from "requiredArgs" /* 3878 */;

let startOfHour = startOfHour_mod;
if (!startOfHour) {
  const obj = { default: startOfHour };
  let tmp3 = obj;
} else {
  tmp3 = startOfHour;
}
startOfHour = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isSameHour(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = startOfHour.default(arg0);
  const time = defaultResult1.getTime();
  return time === startOfHour.default(arg1).getTime();
};
export default exports.default;
