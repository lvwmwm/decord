// Module ID: 4682
// Function ID: 4683
// Name: setYear
// Dependencies: [4259, 4255, 4256]
// Exports: default

// Module 4682 (setYear)
import toInteger_mod from "toInteger" /* 4259 */;
import toDate_mod from "toDate" /* 4255 */;
import requiredArgs_mod from "requiredArgs" /* 4256 */;

let tmp3;
let tmp5;
let tmp7;
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
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  tmp7 = { default: requiredArgs };
  const obj3 = { default: requiredArgs };
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function setYear(date, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = toDate.default(date);
  const defaultResult2 = toInteger.default(arg1);
  if (isNaN(defaultResult1.getTime())) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(NaN);
    return date;
  } else {
    defaultResult1.setFullYear(defaultResult2);
    return defaultResult1;
  }
};
