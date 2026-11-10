// Module ID: 4717
// Function ID: 4718
// Name: setQuarter
// Dependencies: [4298, 4294, 4707, 4295]
// Exports: default

// Module 4717 (setQuarter)
import toInteger_mod from "toInteger" /* 4298 */;
import toDate_mod from "toDate" /* 4294 */;
import setMonth_mod from "setMonth" /* 4707 */;
import requiredArgs_mod from "requiredArgs" /* 4295 */;

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
