// Module ID: 3902
// Function ID: 3903
// Name: formatDistanceToNow
// Dependencies: [3898, 3651]
// Exports: default

// Module 3902 (formatDistanceToNow)
import formatDistance from "formatDistance" /* 3898 */;
import requiredArgs from "requiredArgs" /* 3651 */;

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
