// Module ID: 3895
// Function ID: 3896
// Name: setISOWeek
// Dependencies: [3479, 3475, 3747, 3476]
// Exports: default

// Module 3895 (setISOWeek)
import toInteger from "toInteger" /* 3479 */;
import _typeof from "_typeof" /* 3475 */;
import getISOWeek from "getISOWeek" /* 3747 */;
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
if (!getISOWeek) {
  obj = { default: null };
  obj[0] = getISOWeek;
  let tmp7 = obj;
} else {
  tmp7 = getISOWeek;
}
getISOWeek = tmp7;
if (!requiredArgs) {
  const obj1 = { default: null };
  obj1[0] = requiredArgs;
  let tmp9 = obj1;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setISOWeek(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const diff = getISOWeek.default(defaultResult1) - toInteger.default(arg1);
  defaultResult1.setDate(defaultResult1.getDate() - 7 * diff);
  return defaultResult1;
};
export default exports.default;
