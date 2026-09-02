// Module ID: 3739
// Function ID: 3740
// Name: addWeeks
// Dependencies: [3575, 3719, 3572]
// Exports: default

// Module 3739 (addWeeks)
import toInteger from "toInteger" /* 3575 */;
import addDays from "addDays" /* 3719 */;
import requiredArgs from "requiredArgs" /* 3572 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addDays) {
  obj = { default: null };
  obj[0] = addDays;
  let tmp5 = obj;
} else {
  tmp5 = addDays;
}
addDays = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addWeeks(arg0, arg1) {
  requiredArgs.default(2, arguments);
  return addDays.default(arg0, 7 * toInteger.default(arg1));
};
export default exports.default;
