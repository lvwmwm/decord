// Module ID: 3851
// Function ID: 3852
// Name: getUnixTime
// Dependencies: [3850, 3572]
// Exports: default

// Module 3851 (getUnixTime)
import getTime from "getTime" /* 3850 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!getTime) {
  let obj = { default: null };
  obj[0] = getTime;
  let tmp3 = obj;
} else {
  tmp3 = getTime;
}
getTime = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(getTime.default(arg0) / 1000);
};
export default exports.default;
