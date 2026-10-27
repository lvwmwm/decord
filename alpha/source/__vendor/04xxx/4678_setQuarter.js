// Module ID: 4678
// Function ID: 4679
// Name: setQuarter
// Dependencies: [4259, 4255, 4668, 4256]
// Exports: default

// Module 4678 (setQuarter)
import toInteger_mod from "toInteger" /* 4259 */;
import toDate_mod from "toDate" /* 4255 */;
import setMonth_mod from "setMonth" /* 4668 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let tmp3;
let tmp5;
let tmp7;
let tmp9;
let toInteger = toInteger_mod;
if (!toInteger) {
  tmp3 = { default: toInteger };
  const obj = { default: toInteger };
} else {
  tmp3 = toInteger;
}
toInteger = tmp3;
let toDate = toDate_mod;
if (!toDate) {
  tmp5 = { default: toDate };
  const obj2 = { default: toDate };
} else {
  tmp5 = toDate;
}
toDate = tmp5;
let setMonth = setMonth_mod;
if (!setMonth) {
  tmp7 = { default: setMonth };
  const obj3 = { default: setMonth };
} else {
  tmp7 = setMonth;
}
setMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp9 = { default: requiredArgs };
  const obj4 = { default: requiredArgs };
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setQuarter(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(arg0);
  const defaultResult2 = toInteger.default(arg1);
  const diff = defaultResult2 - (Math.floor(defaultResult1.getMonth() / 3) + 1);
  return setMonth.default(defaultResult1, defaultResult1.getMonth() + 3 * diff);
};
