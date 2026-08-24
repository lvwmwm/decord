// Module ID: 3643
// Function ID: 3644
// Name: addWeeks
// Dependencies: [3479, 3623, 3476]
// Exports: default

// Module 3643 (addWeeks)
import toInteger from "toInteger" /* 3479 */;
import addDays from "addDays" /* 3623 */;
import requiredArgs from "requiredArgs" /* 3476 */;

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
