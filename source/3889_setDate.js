// Module ID: 3889
// Function ID: 3890
// Name: setDate
// Dependencies: [3479, 3475, 3476]
// Exports: default

// Module 3889 (setDate)
import toInteger from "toInteger" /* 3479 */;
import _typeof from "_typeof" /* 3475 */;
import requiredArgs from "requiredArgs" /* 3476 */;

if (!toInteger) {
  let obj = { default: null };
  obj[0] = toInteger;
  let tmp3 = obj;
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
if (!_typeof) {
  obj = { default: null };
  obj[0] = _typeof;
  let tmp5 = obj;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
if (!requiredArgs) {
  obj = { default: null };
  obj[0] = requiredArgs;
  let tmp7 = obj;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setDate(toInteger) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(toInteger);
  defaultResult1.setDate(toInteger.default(arg1));
  return defaultResult1;
};
export default exports.default;
