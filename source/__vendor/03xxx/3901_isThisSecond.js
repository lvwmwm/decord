// Module ID: 3901
// Function ID: 3902
// Name: isThisSecond
// Dependencies: [3893, 3541]
// Exports: default

// Module 3901 (isThisSecond)
import isSameSecond from "isSameSecond" /* 3893 */;
import requiredArgs from "requiredArgs" /* 3541 */;

if (!isSameSecond) {
  let obj = { default: null };
  obj[0] = isSameSecond;
  let tmp3 = obj;
} else {
  tmp3 = isSameSecond;
}
isSameSecond = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisSecond(arg0) {
  requiredArgs.default(1, arguments);
  return isSameSecond.default(Date.now(), arg0);
};
export default exports.default;
