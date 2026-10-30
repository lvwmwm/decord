// Module ID: 4569
// Function ID: 4570
// Name: getUnixTime
// Dependencies: [4568, 4290]
// Exports: default

// Module 4569 (getUnixTime)
import getTime_mod from "getTime" /* 4568 */;
import requiredArgs_mod from "requiredArgs" /* 4290 */;

let tmp3;
let tmp5;
let getTime = getTime_mod;
if (!getTime) {
  tmp3 = { default: getTime };
  const obj = { default: getTime };
} else {
  tmp3 = getTime;
}
getTime = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function getUnixTime(arg0) {
  requiredArgs.default(1, arguments);
  return Math.floor(getTime.default(arg0) / 1000);
};
