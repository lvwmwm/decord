// Module ID: 3902
// Function ID: 3903
// Name: isThisQuarter
// Dependencies: [3894, 3543]
// Exports: default

// Module 3902 (isThisQuarter)
import isSameQuarter from "isSameQuarter" /* 3894 */;
import requiredArgs from "requiredArgs" /* 3543 */;

if (!isSameQuarter) {
  let obj = { default: null };
  obj[0] = isSameQuarter;
  let tmp3 = obj;
} else {
  tmp3 = isSameQuarter;
}
isSameQuarter = tmp3;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp5 = obj;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisQuarter(arg0) {
  requiredArgs.default(1, arguments);
  return isSameQuarter.default(Date.now(), arg0);
};
export default exports.default;
