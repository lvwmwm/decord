// Module ID: 4408
// Function ID: 4409
// Name: formatDistanceToNow
// Dependencies: [4404, 4157]
// Exports: default

// Module 4408 (formatDistanceToNow)
import formatDistance_mod from "formatDistance" /* 4404 */;
import requiredArgs_mod from "requiredArgs" /* 4157 */;

let tmp3;
let tmp5;
let formatDistance = formatDistance_mod;
if (!formatDistance) {
  tmp3 = { default: formatDistance };
  const obj = { default: formatDistance };
} else {
  tmp3 = formatDistance;
}
formatDistance = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp5 = { default: requiredArgs };
  const obj2 = { default: requiredArgs };
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return formatDistance.default(arg0, Date.now(), arg1);
};
