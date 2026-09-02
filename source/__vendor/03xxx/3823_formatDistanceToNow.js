// Module ID: 3823
// Function ID: 3824
// Name: formatDistanceToNow
// Dependencies: [3819, 3572]
// Exports: default

// Module 3823 (formatDistanceToNow)
import formatDistance from "formatDistance" /* 3819 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!formatDistance) {
  let obj = { default: null };
  obj[0] = formatDistance;
  let tmp3 = obj;
} else {
  tmp3 = formatDistance;
}
formatDistance = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function formatDistanceToNow(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return formatDistance.default(arg0, Date.now(), arg1);
};
export default exports.default;
