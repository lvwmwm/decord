// Module ID: 4198
// Function ID: 4199
// Name: getUnixTime
// Dependencies: [4197, 3919]
// Exports: default

// Module 4198 (getUnixTime)
import getTime_mod from "getTime" /* 4197 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;

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
