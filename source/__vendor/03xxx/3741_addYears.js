// Module ID: 3741
// Function ID: 3742
// Name: addYears
// Dependencies: [3576, 3721, 3573]
// Exports: default

// Module 3741 (addYears)
import toInteger from "toInteger" /* 3576 */;
import addMonths from "addMonths" /* 3721 */;
import requiredArgs from "requiredArgs" /* 3573 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!addMonths) {
  obj = { default: null };
  obj[0] = addMonths;
  let tmp5 = obj;
} else {
  tmp5 = addMonths;
}
addMonths = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function addYears(interval) {
  requiredArgs.default(2, arguments);
  return addMonths.default(interval, 12 * toInteger.default(arg1));
};
export default exports.default;
